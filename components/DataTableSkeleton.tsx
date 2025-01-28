import { Skeleton } from "@/components/ui/skeleton";

const DataTableSkeleton = () => {
  return (
    <div className='space-y-2 p-4'>
      <div className='flex space-x-4'>
        <Skeleton className='h-5 w-1/4' />
        <Skeleton className='h-5 w-1/4' />
        <Skeleton className='h-5 w-1/4' />
      </div>
      <div className='flex space-x-4'>
        <Skeleton className='h-5 w-1/3' />
        <Skeleton className='h-5 w-1/3' />
        <Skeleton className='h-5 w-1/4' />
      </div>
      <div className='flex space-x-4'>
        <Skeleton className='h-5 w-1/5' />
        <Skeleton className='h-5 w-1/2' />
        <Skeleton className='h-5 w-1/6' />
      </div>
      <div className='flex space-x-4'>
        <Skeleton className='h-5 w-1/3' />
        <Skeleton className='h-5 w-1/4' />
        <Skeleton className='h-5 w-1/5' />
      </div>
      <div className='flex space-x-4'>
        <Skeleton className='h-5 w-1/4' />
        <Skeleton className='h-5 w-1/3' />
        <Skeleton className='h-5 w-1/3' />
      </div>
    </div>
  );
};

export { DataTableSkeleton };
