import { Skeleton } from "@/components/ui/skeleton";

const DataTableSkeleton = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center text-3xl font-bold pt-4 my-10'>
        <Skeleton className='h-8 w-1/3 mx-auto rounded' />
      </div>
      <div className='container mx-auto rounded-md'>
        <div className='overflow-auto'>
          <table className='w-full caption-bottom text-sm'>
            <thead>
              <tr className='border-b'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <th key={index} className='h-10 px-2 text-left align-middle font-medium text-muted-foreground'>
                    <Skeleton className='h-4 w-3/4 rounded' />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <tr key={rowIndex} className='border-b'>
                  {Array.from({ length: 5 }).map((_, cellIndex) => (
                    <td key={cellIndex} className='p-2 align-middle'>
                      <Skeleton className='h-4 w-full rounded' />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center space-x-4 mt-4'>
          <Skeleton className='h-10 w-24 rounded' />
          <Skeleton className='h-10 w-24 rounded' />
        </div>
      </div>
    </div>
  );
};

export { DataTableSkeleton };
