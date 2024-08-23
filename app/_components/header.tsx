import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Code2, MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import GoogleICO from '../../public/google.svg';

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <h1 className="flex flex-row items-center gap-2 text-2xl font-medium">
            <Code2 size={30} /> DevTrek
          </h1>
        </Link>

        {/* DESKTOP */}
        <div>
          <Button>
            <Image src={GoogleICO} alt="Google Icon" width={20} height={20} className="mr-1" />
            Continue with Google
          </Button>
        </div>

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
