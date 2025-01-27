"use client";

import { useData } from "@/context/DataContext";
import { useParams } from "next/navigation";

export default function JobsDetails() {
  const { data, loading } = useData();
  const params = useParams();
  const id = params.id as string;
  const details = data[parseInt(id)];
  if (loading) {
    return <div>Loading...</div>;
  }
  // Job Title,Company Name,Location,Job Description,Requirements
  return (
    <div className='container mx-auto'>
      <div className='text-center text-3xl font-bold pt-4 my-10'>
        Job Details
      </div>
      <div className='container mx-auto rounded-md '>Placeholder</div>
    </div>
  );
}
