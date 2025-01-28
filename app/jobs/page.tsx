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
import { Tilt } from "@/components/ui/tilt";

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {jobs.map((job) => (
          <Tilt rotationFactor={12} isRevese key={job.id}>
            <Card
              className='shadow-md cursor-pointer w-full'
              onClick={() => handleDetailsRoute(job.id)}
            >
              <CardHeader>
                <CardTitle>{job.jobTitle}</CardTitle>
                <CardDescription>{job.companyName}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{job.location}</p>
              </CardContent>
            </Card>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
