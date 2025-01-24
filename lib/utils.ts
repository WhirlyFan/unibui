import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Papa from "papaparse";
import { ColumnDef } from "@tanstack/react-table";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Column {
  id: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // table: TanstackTable<TData>; //HERE
}

export type JobType = {
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  requirements: string;
};

export async function fetchCsvData(url: string): Promise<JobType[]> {
  const response = await fetch(url);
  const csvText = await response.text();
  return new Promise((resolve, reject) => {
    interface CsvParseResult<T> {
      data: T[];
    }

    interface CsvParseError {
      message: string;
    }

    Papa.parse(csvText, {
      header: true,
      complete: (results: CsvParseResult<JobType>) => {
        resolve(results.data);
      },
      error: (error: CsvParseError) => {
        reject(error);
      },
    });
  });
}

export function moveColumnsDown(
  columnObj: Column[],
  columnId: string
): string[] {
  const array: string[] = columnObj.map((item: Column) => item.id);
  const index = array.indexOf(columnId);
  if (index < 0 || index === array.length - 2) {
    //not found or next to actions which can't be moved
    return array;
  }

  const temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
  console.log(array);
  return array;
}

export function moveColumnsUp(columnObj: Column[], columnId: string): string[] {
  const array: string[] = columnObj.map((item: Column) => item.id);
  const index: number = array.indexOf(columnId);
  if (index < 2) {
    //not found or next to checkbox column which can't be moved
    return array;
  }

  const temp: string = array[index];
  array[index] = array[index - 1];
  array[index - 1] = temp;
  return array;
}
