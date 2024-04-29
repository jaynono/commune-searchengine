// import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
// import { CreateInvoice } from '@/app/ui/invoices/buttons';
// import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { SignalIcon } from '@heroicons/react/24/outline';
// import { fetchInvoicesPages } from '@/app/lib/data';
 
export default async function Page() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-end my-6 pr-[27%]">
        <h1 className="font-medium text-4xl text-gray-300 dark:text-white">Find the best site</h1>
      </div>
      <div className='flex flex-row justify-around'>
        <div className="mt-4 flex flex-col gap-6 items-center w-[30%] justify-center gap-2 px-14 md:mt-8">
          <img
            src= "/search.jpg"
            className="inline-block hidden md:block rounded-full w-[300px] h-[300px]"
            // width={80}
            // height={80}
            alt="Screenshots of the dashboard project showing desktop version"
            />
          <Search placeholder="Search ..." />
          <button className="bg-blue-500 dark:bg-blue-900 hover:bg-blue-700 text-white font-boldpy-2 py-2 px-4 rounded-full backdrop-blur-lg bg-opacity-50">
            <div className='flex items-center w-12 h-8'><SignalIcon /></div>
          </button>
        </div>
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <Table />
        </Suspense>
      </div>
    </div>
  );
}