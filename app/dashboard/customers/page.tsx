// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import Image from 'next/image';
import data from '@/app/lib/placeholder-data'
import matchimg from '@/public/match.jpg'
import { Card } from '@/app/ui/dashboard/cards';
import { matchlist } from '@/app/lib/placeholder-data';
import { SignalIcon, } from '@heroicons/react/24/outline';
import Search from '@/app/ui/search';

export default function Page() {
    
    const data = matchlist;
    
    return (
        <main className='p-2 h-screen z-1'>
            <div className="mt-6 flex flex-row gap-6 md:flex-col">
                
                <Suspense fallback={<CardsSkeleton />}>
                    <div className='flex flex-wrap items-start justify-around  gap-1 row-gap-2 overflow-auto py-4 scrollbar-container'>
                        {data.map((data) => (
                            <Card key={data.id} teamlogo1={data.teamlogo1} teamlogo2={data.teamlogo2} teamname1={data.teamname1} teamname2={data.teamname2} time={data.time} />
                        ))}
                        {/* <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /> */}
                    </div>
                </Suspense>
            </div>
        </main>
    );
    }