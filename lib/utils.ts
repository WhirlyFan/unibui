import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
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
  id: string;
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  requirements: string;
};



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
