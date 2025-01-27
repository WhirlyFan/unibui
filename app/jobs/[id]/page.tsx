"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";

export default function JobDetails() {
  const { data, loading } = useData();
  const router = useRouter();
  const { id } = useParams();
  const job = data[parseInt(id as string)];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex space-x-4'>
          <Button onClick={() => router.push("/jobs")}>
            Back to Saved Jobs
          </Button>
          <Button onClick={() => router.push("/")}>Back to Jobs</Button>
        </div>
        <Button>Apply {"(Placeholder)"}</Button>
      </div>
      <div className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Job Details</h1>
        </div>
        <div>
          <h2 className='text-3xl font-bold'>{job.jobTitle}</h2>
          <p className='text-lg text-gray-600'>{job.companyName}</p>
        </div>
        <div>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
        </div>
        <div>
          <p>
            <strong>Description:</strong> {job.jobDescription}
          </p>
        </div>
        <div>
          <p className='font-semibold mt-2'>Requirements:</p>
          <ul className='list-disc list-inside'>
            {job.requirements.split(",").map((req, index) => (
              <li key={index}>{req.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
