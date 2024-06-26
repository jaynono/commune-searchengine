import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import { matchlist } from '@/app/lib/placeholder-data';

const MatchPage = () => {

  const data = matchlist;

  return (
    <main className='p-2 h-screen z-1'>
      <div className="mt-6 flex flex-row gap-6 md:flex-col">

        <Suspense fallback={<CardsSkeleton />}>
          <div className='flex flex-wrap items-start justify-around  gap-1 row-gap-2 overflow-auto py-4 scrollbar-container'>
            {data.map((data) => (
              <Cardlist key={data.id} teamlogo1={data.teamlogo1} teamlogo2={data.teamlogo2} teamname1={data.teamname1} teamname2={data.teamname2} time={data.time} />
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  );
}

function Cardlist(
  {
    teamlogo1,
    teamlogo2,
    teamname1,
    teamname2,
    time,
  }: {
    teamlogo1: string;
    teamlogo2: string;
    teamname1: string;
    teamname2: string;
    time: string;
  }
) {
  return (
    <>
      <a href="#">
        <div className="flex flex-col justify-around w-[350px] h-[200px] text-gray-300 dark:text-white rounded-xl p-2 shadow-sm backdrop-blur-lg bg-opacity-50 bg-custom-blue dark:bg-blue-900 dark:backdrop-blur-lg dark:bg-opacity-50  mb-2">
          <div className="flex justify-center p-2 pb-0">
            <span>{time}</span>
          </div>
          <div className='flex flex-row justify-around items-center'>
            <div className='flex flex-col items-center '>
              <div className='flex items-center justify-center w-[100px] h-[100px] mb-2'>
                <img
                  src={teamlogo1}
                  className="inline-block hidden w-[100px] h-[100px] md:block"
                  alt="Screenshots of the home project showing desktop version"
                />
              </div>
              <div>{teamname1}</div>
            </div>
            <div>VS</div>
            <div className='flex flex-col items-center'>
              <div className='flex items-center justify-center w-[100px] h-[100px] mb-2'>
                <img
                  src={teamlogo2}
                  className="inline-block hidden md:block w-[100px] h-[100px]"
                  // width={80}
                  // height={80}
                  alt="Screenshots of the home project showing desktop version"
                />
              </div>
              <div>{teamname2}</div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default MatchPage;
