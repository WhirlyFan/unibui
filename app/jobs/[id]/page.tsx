"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import { Magnetic } from "@/components/ui/magnetic";
import { TextEffect } from "@/components/ui/text-effect";
import { Skeleton } from "@/components/ui/skeleton";
import { addJob, deleteJob, jobExists } from "@/lib/utils";
import { Toast } from "@/components/Toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";

export default function JobDetails() {
  const { data, loading } = useData();
  const router = useRouter();
  const { id } = useParams();
  const job = data[parseInt(id as string)];
  const [isJobSaved, setIsJobSaved] = useState(false);

  useEffect(() => {
    setIsJobSaved(jobExists(job?.id));
  }, [job?.id]);

  const handleSaveJob = () => {
    addJob(job);
    setIsJobSaved(true);
  };

  const handleDeleteJob = () => {
    deleteJob(job.id);
    setIsJobSaved(false);
  };

  if (!job && !loading) {
    return (
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center mb-4'>
          <Button onClick={() => router.push("/jobs")}>
            Back to Saved Jobs
          </Button>
          <Button onClick={() => router.push("/")}>Back to Jobs</Button>
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Job not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <Button onClick={() => router.push("/jobs")}>Back to Saved Jobs</Button>
        <Button onClick={() => router.push("/")}>Back to Jobs</Button>
      </div>

      <div className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold'>Job Details</h1>
        </div>
        {loading ? (
          <div className='space-y-2'>
            <Skeleton className='h-5 w-48' />
            <Skeleton className='h-5 w-full' />
            <Skeleton className='h-5 w-3/4' />
            <Skeleton className='h-5 w-full' />
          </div>
        ) : (
          <div className='space-y-4 border border-gray-800 dark:border-gray-200 p-4 rounded-md shadow-md'>
            <div>
              <h2 className='text-3xl font-bold'>
                <TextEffect
                  preset='fade-in-blur'
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  {job.jobTitle}
                </TextEffect>
              </h2>
              <p className='text-lg text-gray-600'>
                <TextEffect
                  preset='fade-in-blur'
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  {job.companyName}
                </TextEffect>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  {" "}
                  <TextEffect
                    preset='fade-in-blur'
                    speedReveal={1.1}
                    speedSegment={0.3}
                  >
                    Location:
                  </TextEffect>
                </strong>{" "}
                <TextEffect
                  preset='fade-in-blur'
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  {job.location}
                </TextEffect>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  {" "}
                  <TextEffect
                    preset='fade-in-blur'
                    speedReveal={1.1}
                    speedSegment={0.3}
                  >
                    Description:
                  </TextEffect>
                </strong>{" "}
                <TextEffect
                  preset='fade-in-blur'
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  {job.jobDescription}
                </TextEffect>
              </p>
            </div>
            <div>
              <p className='font-semibold mt-2'>
                <TextEffect
                  preset='fade-in-blur'
                  speedReveal={1.1}
                  speedSegment={0.3}
                >
                  Requirements:
                </TextEffect>
              </p>
              <ul className='list-none'>
                {job.requirements.split(",").map((req, index) => (
                  <li key={index} className='flex items-start'>
                    <TextEffect
                      preset='fade-in-blur'
                      speedReveal={1.1}
                      speedSegment={0.3}
                    >
                      {req.trim()}
                    </TextEffect>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className='flex space-x-4'>
          <Button onClick={handleSaveJob} disabled={loading}>
            <Toast
              title={
                isJobSaved ? "Job already saved" : "Job saved successfully!"
              }
              buttonText={"Save"}
              description={`Job Title: ${job?.jobTitle}`}
              action={
                <ToastAction altText='Undo' onClick={handleDeleteJob}>
                  Undo
                </ToastAction>
              }
            />
          </Button>
          <Magnetic>
            <Button disabled={loading}>Apply {"(Placeholder)"}</Button>
          </Magnetic>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
