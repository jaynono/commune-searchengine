// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import Image from 'next/image';
import data from '@/app/lib/placeholder-data'

export default function Page() {
    
    
    return (
        <main className='p-2 '>
            <div className="mt-6 flex flex-col justify-around gap-6 md:flex-row">
                <div className='flex flex-col w-[70%]'>
                    <span className={`font-medium text-4xl text-gray-300 dark:text-white flex justify-center my-4`}>Today's Match</span>

                    <Suspense fallback={<CardsSkeleton />}>
                        <CardWrapper />
                    </Suspense>
                </div>

                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
    }