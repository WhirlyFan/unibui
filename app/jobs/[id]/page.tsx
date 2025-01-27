"use client";

import { useData } from "@/context/DataContext";
import { useParams } from "next/navigation";

export default function JobsDetails() {
  const { data, loading, refetch } = useData();
  const params = useParams();
  const id = params.id as string;
  const details = data[parseInt(id)];
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{details.jobTitle}</h1>
      <p>{details.jobDescription}</p>
    </div>
  );
}
