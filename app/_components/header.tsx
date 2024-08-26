'use client';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Code2, Loader, LogOut, MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import GoogleICO from '../../public/google.svg';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from './ui/avatar';

const Header = () => {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <h1 className="flex flex-row items-center gap-2 text-2xl font-medium">
            <Code2 size={30} /> DevTrek
          </h1>
        </Link>

        {/* DESKTOP */}

        {/* TODO: Use useSession for authenticated and unauthenticated users. */}

        {status === 'loading' && (
          <button className="animate-spin">
            <Loader size={26} color="#4b5563" />
          </button>
        )}

        {status === 'unauthenticated' && (
          <Button className="font-semibold" onClick={handleLogin}>
            <Image src={GoogleICO} alt="Google Icon" width={20} height={20} className="mr-1" />
            Continue with Google
          </Button>
        )}

        {status === 'authenticated' && (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ''} />
            </Avatar>
            <p className="font-medium">{data.user?.name}</p>
            <button onClick={handleLogout}>
              <LogOut size={26} color="#ff0000" />
            </button>
          </div>
        )}

        {/* MOBILE
        <div className="flex flex-col sm:hidden sm:gap-4 sm:py-4 sm:pl-14">
          <MenuIcon />
        </div>
         */}
      </CardContent>
    </Card>
  );
};

export default Header;
