"use client";

import React, { useEffect, useState } from "react";
import { deleteJob, getSavedJobs, JobType } from "@/lib/utils";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

  const handleRemoveJob = (id: string) => {
    deleteJob(id);
    setJobs(jobs.filter((job) => job.id !== id));
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
          <Tilt rotationFactor={8} isRevese key={job.id}>
            <Card className='shadow-md w-full'>
              <CardHeader>
                <CardTitle>{job.jobTitle}</CardTitle>
                <CardDescription>{job.companyName}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex justify-between items-center'>
                  <p>{job.location}</p>
                  <Button onClick={() => handleDetailsRoute(job.id)}>
                    Go to Job
                  </Button>
                  <Dialog>
                    <DialogTrigger className='cursor-pointer'>
                      <Button variant='destructive'>Remove</Button>
                    </DialogTrigger>
                    <DialogContent className='bg-white p-6 rounded-lg shadow-lg fixed inset-0 flex items-center justify-center'>
                      <DialogHeader>
                        <DialogTitle className='text-lg font-bold'>
                          Remove Job
                        </DialogTitle>
                        <DialogDescription className='text-sm text-gray-500'>
                          Are you sure you want to remove this job?
                        </DialogDescription>
                      </DialogHeader>
                      <div className='flex justify-end space-x-2 mt-4'>
                        <Button
                          variant='destructive'
                          onClick={() => handleRemoveJob(job.id)}
                        >
                          Confirm
                        </Button>
                        <DialogClose />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
