'use client';

import {
  ChartBarIcon,
  GlobeAmericasIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/home', icon: ChartBarIcon },
  {
    name: 'SiteList',
    href: '/home/sitelist',
    icon: GlobeAmericasIcon,
  },
  { name: 'Find Match', href: '/home/match', icon: TrophyIcon },
];

const NavLinks = () => {
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

export default NavLinks;
