import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { todayevent } from '@/app/lib/placeholder-data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};


export default function CardWrapper() {

  const eventdata = todayevent;
  return (
    <div className='flex flex-col '>
      <div className='flex flex-wrap items-start justify-around  gap-1 row-gap-2 overflow-auto py-4 scrollbar-container'>
        {eventdata.map((data) => (
          <Card key={data.id} teamlogo1={data.teamlogo1} teamlogo2={data.teamlogo2} teamname1={data.teamname1} teamname2={data.teamname2} time={data.time} amount={data.amount} />
        ))}
      </div>
    </div>
  );
}

export function Card(
  {
  teamlogo1,
  teamlogo2,
  teamname1,
  teamname2,
  time,
  amount,
}: {
  teamlogo1: string;
  teamlogo2: string;
  teamname1: string;
  teamname2: string;
  time: string;
  amount: string;
}
) {
  return (
    <>
    <a href="#">
      <div className="flex flex-col justify-around w-[350px] h-[200px] text-gray-300 dark:text-white rounded-xl p-2 shadow-sm backdrop-blur-lg bg-opacity-50 bg-custom-blue dark:bg-blue-900 dark:backdrop-blur-lg dark:bg-opacity-50  mb-2">
        <div className="flex justify-center p-2 pb-0">
          {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
          {/* <h3 className="ml-2 text-sm font-medium">werwer</h3> */}
          <span>{time}</span>
        </div>
        <div className='flex flex-row justify-around items-center'>
          <div className='flex flex-col items-center '>
            <div className='flex items-center justify-center w-[100px] h-[100px] mb-2'>
              <img
              src = {teamlogo1}
              className="inline-block hidden w-[100px] h-[100px] md:block"
              // width={80}
              // height={80}
              alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>{teamname1}</div>
          </div>
          <div>VS</div>
          <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center w-[100px] h-[100px] mb-2'>
              <img
              src= {teamlogo2}
              className="inline-block hidden md:block w-[100px] h-[100px]"
              // width={80}
              // height={80}
              alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <div>{teamname2}</div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          {amount}
        </div>
      </div>
    </a>
    </>
  );
}
