import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
// import {fetchLatestInvoices} from '@/app/lib/data';
import data from '@/app/lib/placeholder-data'

export default async function LatestInvoices(){
  // const latestInvoices = await fetchLatestInvoices();
  const {popularsitelist} = data;
  return (
    <div className="flex w-[30%] flex-col md:col-span-4 scrollbar-container">
      <span className="font-medium text-2xl text-gray-300 justify-end px-4 dark:text-white flex my-4">Top 10 popular site</span>
      <div className="flex grow flex-col rounded-xl backdrop-blur-lg bg-opacity-50 bg-custom-blue dark:bg-blue-900 dark:backdrop-blur-lg dark:bg-opacity-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-gray-200 backdrop-blur-lg bg-opacity-50 dark:bg-blue-300 dark:backdrop-blur-lg dark:bg-opacity-50 rounded-xl px-6">
          {popularsitelist.map((data,i) => {
            return (
              <div
                key={data.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-2',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200 md:text-base">
                      {data.name}
                    </p>
                    <p className="hidden text-sm dark: text-gray-300 sm:block">
                      {data.location}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {data.usercount} K
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <a href="#">
            <ArrowPathIcon className="h-5 w-5 text-gray-300" />
          </a>
          <h3 className="ml-2 text-sm text-gray-300">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
