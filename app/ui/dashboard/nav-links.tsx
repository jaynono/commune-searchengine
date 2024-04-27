'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ChartBarIcon,
  GlobeAmericasIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: ChartBarIcon },
  {
    name: 'SiteList',
    href: '/dashboard/invoices',
    icon: GlobeAmericasIcon,
  },
  { name: 'Find Match', href: '/dashboard/customers', icon: TrophyIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-none p-3 text-sm font-medium hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-green-500': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
              <p className="hidden text-lg md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
