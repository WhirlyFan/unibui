import { ColumnDef } from "@tanstack/react-table";
import {
  HiArrowsUpDown,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import { RiMore2Fill } from "react-icons/ri";
import { Toast } from "@/components/reusable/Toast";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { JobType, moveColumnsDown, moveColumnsUp } from "@/lib/utils";


// Job Title,Company Name,Location,Job Description,Requirements
export const columns: ColumnDef<JobType>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label='Select all'
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label='Select row'
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    id: "jobTitle",
    accessorKey: "Job Title",
    header: ({ column }) => {
      return (
        <div className='flex justify-between py-2 text-left'>
          Job Title
          <HiArrowsUpDown
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className='flex flex-row gap-4'>
          <HiOutlineArrowLeftCircle
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className='w-4 h-4 mr-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    id: "companyName",
    accessorKey: "Company Name",
    header: ({ column }) => {
      return (
        <div className='flex justify-between py-2 text-left'>
          Company Name
          <HiArrowsUpDown
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className='flex flex-row gap-4'>
          <HiOutlineArrowLeftCircle
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className='w-4 h-4 mr-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    id: "location",
    accessorKey: "Location",
    header: ({ column }) => {
      return (
        <div className='flex justify-between py-2 text-left'>
          Location
          <HiArrowsUpDown
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className='flex flex-row gap-4'>
          <HiOutlineArrowLeftCircle
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className='w-4 h-4 mr-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    id: "jobDescription",
    accessorKey: "Job Description",
    header: ({ column }) => {
      return (
        <div className='flex justify-between py-2 text-left'>
          Job Description
          <HiArrowsUpDown
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className='flex flex-row gap-4'>
          <HiOutlineArrowLeftCircle
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className='w-4 h-4 mr-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    id: "requirements",
    accessorKey: "Requirements",
    header: ({ column }) => {
      return (
        <div className='flex justify-between py-2 text-left'>
          Requirements
          <HiArrowsUpDown
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    footer: ({ column, table }) => {
      return (
        <div className='flex flex-row gap-4'>
          <HiOutlineArrowLeftCircle
            className='w-4 h-4 ml-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsUp(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowLeftCircle>
          <HiOutlineArrowRightCircle
            className='w-4 h-4 mr-2 cursor-pointer'
            onClick={() =>
              table.setColumnOrder(
                moveColumnsDown(table.getAllLeafColumns(), column.id)
              )
            }
          ></HiOutlineArrowRightCircle>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const incomeStatement = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='w-8 h-8 p-0'>
              <RiMore2Fill />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(JSON.stringify(incomeStatement))
              }
            >
              <Toast
                buttonText={"Copy Income Statement JSON"}
                description={"Income Statement JSON copied to clipboard"}
              />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              View Income Statement {"(Placeholder)"}
            </DropdownMenuItem>
            <DropdownMenuItem>Edit {"(Placeholder)"}</DropdownMenuItem>
            <DropdownMenuItem>Delete {"(Placeholder)"}</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  // ...
];
