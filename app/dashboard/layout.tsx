import SideNav from '@/app/ui/dashboard/sidenav';
import Provider from '../ui/Provider';
import dashbg from '@/public/match.jpg'
import { invoices } from '../lib/placeholder-data';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <Provider>
    <div className="flex h-screen flex-col md:overflow-hidden backdrop-blur-lg dark:bg-gray-900"
      style={{
        backgroundImage: `url(${dashbg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // filter: 'brightness(80%)',
    }}>
      
        <div className="w-full flex-none mb-6">
          <SideNav />
        </div>
        <div className="flex-grow p-6 py-2 mt-4 md:overflow-y-auto md:p-12">{children}</div>
      
    </div>
    </Provider>
  );
} 