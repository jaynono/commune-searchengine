import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';
import ThemeSwitcher from '../ThemeSwitcher';
import clsx from 'clsx';

export default function SideNav() {
  return (
  <div className='fixed z-50 flex items-center justify-between rounded-md w-full px-6 py-4 backdrop-blur-lg bg-primary-300 bg-opacity-50 dark:border-gray-700 shadow-md'>
    {/* Left */}
    <div className="z-50 flex flex-row h-full items-center px-14 dark:border-gray-700">
      <div className="relative aspect-square h-[100%] w-auto mr-3">
        <AcmeLogo />
      </div> 
      <div className="hidden md:flex md:mx-6 text-gray-300 dark:text-white">
        <NavLinks />
      </div>
    </div>

    {/* Right */}
    <div className="flex flex-row ml-auto">
      {/* Color mode */}
      {/* <ToggleColorMode /> */}

      <div className="hidden md:flex flex-row h-full items-center">
        <ThemeSwitcher />
        {/* Sign out */}
        <div className=' ml-6 text-gray-300 dark:text-white'>
          <button className="bg-blue-300 dark:bg-blue-900 hover:bg-blue-700 text-white font-boldpy-2 py-2 px-4 rounded-full backdrop-blur-lg bg-opacity-50">
            Connect Wallet
          </button>
        </div>
        {/* <form action={async () => {
            'use server';
            await signOut();
          }}>
          <button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-none p-3 text-sm font-medium hover:text-green-200 md:flex-none md:justify-start md:p-2 md:px-3'>
            <PowerIcon className="w-6" />
          </button>
        </form> */}
      </div>
    </div>
  </div>
  );
}
