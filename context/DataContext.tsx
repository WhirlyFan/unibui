"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { JobType } from "@/lib/utils";
import { camelCase } from "lodash";
import Papa from "papaparse";

interface DataContextType {
  data: JobType[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  setData: React.Dispatch<React.SetStateAction<JobType[]>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fetched, setFetched] = useState(false); // Tracks if we've already fetched

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/jobs.csv");
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result?.value);
      const { data: parsedData } = Papa.parse<JobType>(csv, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => camelCase(header.trim()),
      });
      const dataWithIds = parsedData.map((item, index) => ({
        ...item,
        id: index.toString(),
      }));
      setData(dataWithIds);
      console.log(dataWithIds);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch only on mount if we haven’t yet
  useEffect(() => {
    if (!fetched) {
      fetchData().finally(() => setFetched(true));
    }
  }, [fetched]);

  // Manually triggered refetch
  const refetch = () => {
    fetchData();
  };

  return (
    <DataContext.Provider value={{ data, loading, error, refetch, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
