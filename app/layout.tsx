import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Head from './head';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <html lang="en">

      <Head/>

      <body className={`${inter.className} font-mono subpixel-antialiased w-full bg-gray-200 dark:bg-gray-900`}>
        {children}</body>

    </html>
  );
}

export default RootLayout;
