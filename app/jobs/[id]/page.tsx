"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useData } from "@/context/DataContext";
import { Magnetic } from "@/components/ui/magnetic";
import { TextEffect } from "@/components/ui/text-effect";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobDetails() {
  const { data, loading } = useData();
  const router = useRouter();
  const { id } = useParams();
  const job = data[parseInt(id as string)];


  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex space-x-4'>
          <Button onClick={() => router.push("/jobs")}>
            Back to Saved Jobs
          </Button>
          <Button onClick={() => router.push("/")}>Back to Jobs</Button>
        </div>
        <Magnetic>
          <Button>Apply {"(Placeholder)"}</Button>
        </Magnetic>
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
          <div>
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
              <ul className='list-disc list-inside'>
                {job.requirements.split(",").map((req, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='mr-2'>•</span>
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
      </div>
    </div>
  );
}
