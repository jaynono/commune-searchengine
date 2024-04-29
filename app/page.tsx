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
      <div className='flex flex-row justify-around w-full'>
        <div className="flex h-full rounded-lg p-16 w-[30%] items-center justify-center">
          <Image
            src="/logo.gif"
            width={500}
            height={500}
            className="inline-block"
            alt="Screenshots of the home project showing desktop version"
          />
        </div>
        
        <div className="mt-4 flex flex-col justify-center items-center ">
          <div className='mb-8'>
            <p className="text-xl text-white md:text-3xl md:leading-normal">
              <span className='inline-block text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-pink-500 to-blue-500'><strong>Welcome to our COMMUNE.</strong></span><br /><br />
              Participate in the coolest and craziest bets. <br />
              COMMUNE always brings only fortunate choices.
            </p>
          </div>
          <div className='flex justify-end mr-24'>
            <Link
                href="/home"
                className="mt-4 rounded-md w-full bg-blue-500 px-4 py-2 text-md text-white text-center transition-colors hover:bg-blue-400"
              >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
