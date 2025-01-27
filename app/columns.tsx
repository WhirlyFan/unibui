import { ColumnDef } from "@tanstack/react-table";
import {
  HiArrowsUpDown,
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";

import { JobType, moveColumnsDown, moveColumnsUp } from "@/lib/utils";

import Actions from "@/components/actions";

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
    accessorKey: "jobTitle",
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
    accessorKey: "companyName",
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
    accessorKey: "location",
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
    accessorKey: "jobDescription",
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
    accessorKey: "requirements",
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
    header: "actions",
    cell: ({ row }) => {
      return <Actions row={row} />;
    },
  },
  // ...
];
