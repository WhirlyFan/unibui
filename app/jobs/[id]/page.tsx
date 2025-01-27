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
    <div>
      <h1>{details.jobTitle}</h1>
      <h2>{details.companyName}</h2>
      <h3>{details.location}</h3>
      <p>{details.jobDescription}</p>
      <p>{details.requirements}</p>
    </div>
  );
}
