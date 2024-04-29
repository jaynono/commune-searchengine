import SiteList from '@/app/ui/home/latest-sitelist';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/home/cards';

const HomePage = () => {

    return (
        <main className='p-2 '>
            <div className="mt-6 flex flex-col justify-around gap-6 md:flex-row">
                <div className='flex flex-col w-[70%]'>
                    <span className="font-medium text-4xl text-gray-300 dark:text-white flex justify-center my-4">Today's Match</span>

                    <Suspense fallback={<CardsSkeleton />}>
                        <CardWrapper />
                    </Suspense>
                </div>

                <Suspense>
                    <SiteList />
                </Suspense>
            </div>
        </main>
    );
}

export default HomePage;
