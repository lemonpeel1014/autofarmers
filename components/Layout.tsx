'use client';

import { Toaster } from '@/components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, PropsWithChildren, useState } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Toaster />
      </Suspense>
    </>
  );
}
