import { Suspense } from 'react';

import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Footer } from '@/modules/tenants/ui/components/footer';
import { Navbar, NavbarSkeleton } from '@/modules/tenants/ui/components/navbar';
import { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

// Remove the static metadata export and replace with generateMetadata
export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} | MarketSpace`,
    description: `Explore ${slug}'s marketplace on MarketSpace`,
  };
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { slug } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.tenants.getOne.queryOptions({
      slug,
    })
  );

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex flex-col">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<NavbarSkeleton />}>
          <Navbar slug={slug} />
        </Suspense>
      </HydrationBoundary>
      <div className="flex-1">
        <div className="max-w-(--breakpoint-xl) mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
