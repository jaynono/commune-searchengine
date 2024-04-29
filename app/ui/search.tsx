'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder: string }) {

  return (
    <div className="relative flex flex-shrink-0 w-full">
      <input
        className="peer block rounded-md bg-primary-100 backdrop-blur-lg bg-opacity-50 dark:bg-blue-400 border-none w-full border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-white dark:backdrop-blur-lg dark:bg-opacity-50"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
