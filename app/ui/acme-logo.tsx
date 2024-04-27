import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row w-full items-center leading-none text-white`}
    >
      <Image
        src="/logo.gif"
        width={50}
        height={50}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[30px]"></p>
    </div>
  );
}
