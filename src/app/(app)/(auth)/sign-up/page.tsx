import { redirect } from 'next/navigation';

import { caller } from '@/trpc/server';

import { SignUpView } from '@/modules/auth/ui/views/sign-up-view';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Sign Up | MarketSpace',
};

const Page = async () => {
  const session = await caller.auth.session();

  if (session.user) {
    redirect('/');
  }

  return <SignUpView />;
};

export default Page;
