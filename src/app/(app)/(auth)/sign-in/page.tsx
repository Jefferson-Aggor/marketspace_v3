import { redirect } from 'next/navigation';

import { caller } from '@/trpc/server';

import { SignInView } from '@/modules/auth/ui/views/sign-in-view';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Sign In | MarketSpace',
};

const Page = async () => {
  const session = await caller.auth.session();

  if (session.user) {
    redirect('/');
  }

  return <SignInView />;
};

export default Page;
