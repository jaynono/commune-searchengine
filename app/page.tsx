import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  return (
    <main className="flex min-h-screen flex-row justify-around"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
      }}>
      <div className="flex h-full shrink-0 rounded-lg p-4 items-center justify-center">
        <Image
          src="/logo.gif"
          width={500}
          height={500}
          className="hidden md:inline-block"
          alt="Screenshots of the home project showing desktop version"
        />
      </div>
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <p className="text-xl text-white md:text-3xl md:leading-normal">
            <strong>Welcome to our COMMUNE.</strong><br />
            Participate in the coolest and craziest bets.
            COMMUNE always brings only fortunate choices.
          </p>
          <Link
              href="/home"
              className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Page;
