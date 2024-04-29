import NavLinks from '@/app/ui/home/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import ThemeSwitcher from '../ThemeSwitcher';

const SideNav = () => {
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
      <div className="hidden md:flex flex-row h-full items-center">
        <ThemeSwitcher />
        <div className=' ml-6 text-gray-300 dark:text-white'>
          <button className="bg-blue-300 dark:bg-blue-900 hover:bg-blue-700 text-white font-boldpy-2 py-2 px-4 rounded-full backdrop-blur-lg bg-opacity-50">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default SideNav;
