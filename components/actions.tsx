import { RiMoreLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Toast } from "@/components/Toast";
import { ToastAction } from "@/components/ui/toast";

import { jobExists, addJob, deleteJob } from "@/lib/utils";
import { JobType } from "@/lib/utils";
import { useEffect, useState } from "react";

interface RowType {
  original: JobType;
}

export default function Actions({ row }: { row: RowType }) {
  const job: JobType = row.original;
  const [isJobSaved, setIsJobSaved] = useState(jobExists(job.id));

  const handleAddJob = () => {
    addJob(job);
    setIsJobSaved(true);
  };

  const handleDeleteJob = () => {
    deleteJob(job.id);
    setIsJobSaved(false);
  };

  useEffect(() => {
    setIsJobSaved(jobExists(job.id));
  }, [job.id]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='w-8 h-8 p-0'>
          <RiMoreLine />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' onClick={(e) => e.stopPropagation()}>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {!isJobSaved ? (
          <DropdownMenuItem onClick={handleAddJob}>
            <Toast
              title={"Job Saved Successfully!"}
              buttonText={"Save"}
              description={`Job Title: ${job.jobTitle}`}
              action={
                <ToastAction altText='Undo' onClick={handleDeleteJob}>
                  Undo
                </ToastAction>
              }
            />
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem onClick={handleDeleteJob}>
            <Toast
              title={"Job Removed Successfully!"}
              buttonText={"Remove"}
              description={`Job Title: ${job.jobTitle}`}
              action={
                <ToastAction
                  altText='Undo'
                  onClick={isJobSaved ? handleAddJob : handleDeleteJob}
                >
                  Undo
                </ToastAction>
              }
            />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
