"use client";

import React, { useEffect, useState } from "react";
import { getSavedJobs, JobType } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Jobs() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const savedJobs = getSavedJobs();
    setJobs(savedJobs);
  }, []);

  const handleDetailsRoute = (id: string) => {
    router.push(`/jobs/${id}`);
  };

  const handleHomeRoute = () => {
    router.push("/");
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center my-10'>
        <div className='text-3xl font-bold'>Saved Jobs</div>
        <Button className='cursor-pointer' onClick={handleHomeRoute}>
          Back to Jobs
        </Button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {jobs.map((job) => (
          <Card
            key={job.id}
            className='shadow-md cursor-pointer'
            onClick={() => handleDetailsRoute(job.id)}
          >
            <CardHeader>
              <CardTitle>{job.jobTitle}</CardTitle>
              <CardDescription>{job.companyName}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{job.location}</p>
              <p>{job.jobDescription}</p>
              <p className='font-semibold mt-2'>Requirements:</p>
              <ul className='list-disc list-inside'>
                {job.requirements.split(",").map((req, index) => (
                  <li key={index}>{req.trim()}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
