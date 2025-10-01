'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Loader, MenuIcon } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { cn } from '@/lib/utils';
import { useTRPC } from '@/trpc/client';
import { Button } from '@/components/ui/button';

import { NavbarSidebar } from './navbar-sidebar';
import { toast } from 'sonner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        'bg-transparent hover:bg-transparent rounded-full hover:border-emerald-600 border-transparent px-3.5 text-lg transition-colors',
        isActive &&
          'bg-black text-white hover:bg-emerald-700 hover:text-white border-emerald-600'
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' },
  { href: '/features', children: 'Features' },
  { href: '/pricing', children: 'Pricing' },
  { href: '/contact', children: 'Contact' },
];

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  async function handleLogout() {
    try {
      await fetch('/api/users/logout', {
        method: 'POST',
        credentials: 'include',
      });

      // Redirect to login
      router.push('/sign-in');
      toast.success('Successfully logged out');
    } catch (err) {
      toast.error(`Failed to log out: ${err} `);
    }
  }

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span
          className={cn(
            'text-3xl sm:text-5xl font-semibold',
            poppins.className
          )}
        >
          MarketSpace
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {session.isLoading ? (
        <div className="flex w-full text-muted-foreground text-sm font-light items-center justify-center">
          <Loader className="size-4 animate-spin mr-2" /> Session loading
        </div>
      ) : session.data?.user ? (
        <div className="hidden lg:flex">
          <Button
            asChild
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-lg"
          >
            <Link href="/admin">Dashboard</Link>
          </Button>
          <Button
            onClick={handleLogout}
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-emerald-50 transition-colors text-lg"
          >
            Log out
          </Button>
        </div>
      ) : (
        <div className="hidden lg:flex">
          <Button
            asChild
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-emerald-50 transition-colors text-lg"
          >
            <Link prefetch href="/sign-in">
              Log in
            </Link>
          </Button>
          <Button
            asChild
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-lg"
          >
            <Link prefetch href="/sign-up">
              Start selling
            </Link>
          </Button>
        </div>
      )}

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};
