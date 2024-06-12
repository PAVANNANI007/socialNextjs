import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';

function Header({ toggleSideBar }) {
  const { user } = useUser();
  
  return (
    <div className='p-5 flex justify-between items-center shadow-sm bg-white'>
      <div className="flex items-center">
        <Menu 
          className='md:hidden h-7 w-7 text-slate-500 cursor-pointer'
          onClick={toggleSideBar}
        />
        <div className="md:hidden block ml-3">
          <Image src="/logo.svg" alt="logo" width={150} height={50} />
        </div>
      </div>
      <div className="flex items-center">
        {!user ? (
          <Link href='/sign-in'>
            <Button className='bg-blue-500 hover:bg-blue-600 shadow-sm'>
              Get Started
            </Button>
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
}

export default Header;
