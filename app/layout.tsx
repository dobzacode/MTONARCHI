import { Header } from '@/components/ui/header/header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          'flex flex-col gap-large overflow-x-hidden bg-primary1 p-small tablet:gap-medium tablet:p-medium'
        }
      >
        <Header className=" flex items-center" size="medium" textColor="primary"></Header>
        {children}
      </body>
    </html>
  );
}
