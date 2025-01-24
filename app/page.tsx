"use client"; // NOTE: If this was a real API call this would be a server component

import { useEffect, useState } from "react";
import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { fetchCsvData, JobType } from "@/lib/utils";

// async function deleteData(id: string): Promise<AapleDataType[]> {
//   // Delete from api.
//   const index = aaplData.findIndex((value) => value.id === id)
//   aaplData.splice(index, 1)
//   return aaplData // Simply returning fake data
// }

export default function Home() {
  const [data, setData] = useState<JobType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchCsvData("/jobs.csv");
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const clearData = () => {
    setData([]);
  };

  const refetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchCsvData("/jobs.csv");
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    // Render a loading indicator or message
    // Replace with a skeleton later
    return (
      <div className='container mx-auto rounded-md'>
        <DataTableSkeleton />
      </div>
    );
  }

  //  async function deleteRow(id:string) {
  //   console.log("delete this row")
  //     try {
  //       const result: AapleDataType[] = await deleteData(id);
  //       setData(result);
  //     } catch (error) {
  //       // Handle error
  //       console.error('Error deleting data:', error);
  //     }
  //   }

  return (
    <div className='container mx-auto'>
      <div className='text-center text-3xl font-bold pt-4 my-10'>
        Job Listings
      </div>
      <div className='container mx-auto rounded-md '>
        <DataTable columns={columns} data={data} />
        <div className='flex justify-center space-x-4'>
          <Button onClick={clearData}>Clear Data</Button>
          <Button onClick={refetchData}>Refetch Data</Button>
        </div>
      </div>
    </div>
  );
}
