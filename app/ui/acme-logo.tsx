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
        alt="Screenshots of the home project showing desktop version"
      />
      <p className="text-[30px]"></p>
    </div>
  );
}
