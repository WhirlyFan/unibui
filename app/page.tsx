"use client";

import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useData } from "@/context/DataContext";
import { ModeToggle } from "@/components/mode-toggle";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/navigation";

// async function deleteData(id: string): Promise<JobType[]> {
//   // Delete from api.
//   const index = data.findIndex((value) => value.id === id)
//   data.splice(index, 1)
//   return data // Simply returning fake data
// }

export default function Home() {
  const { data, loading, refetch, setData } = useData();
  const router = useRouter();

  const clearData = () => {
    setData([]);
  };



  //  async function deleteRow(id:string) {
  //   console.log("delete this row")
  //     try {
  //       const result: JobType[] = await deleteData(id);
  //       setData(result);
  //     } catch (error) {
  //       // Handle error
  //       console.error('Error deleting data:', error);
  //     }
  //   }

  const handleJobsRoute = () => {
    router.push(`/jobs`);
  };

  return (
    <div className='container mx-auto w-full'>
      <div className='text-center text-3xl font-bold pt-4 my-10'>
        Job Listings
      </div>
      <div className='container mx-auto rounded-md '>
        {loading ? (
          <DataTableSkeleton />
        ) : (
          <DataTable columns={columns} data={data} />
        )}

        <div className='flex justify-center space-x-4 mt-4'>
          <Button onClick={clearData}>Clear Data</Button>
          <Button onClick={refetch}>Refetch Data</Button>
          <Button onClick={handleJobsRoute}>Saved Jobs</Button>
          <ModeToggle />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
