'use client';

import { useCreateThread } from '@/hooks/thread';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { mutate: createThread } = useCreateThread({
    onSuccess: ({ threadId }) => {
      router.push('/thread?id=' + threadId);
    },
  });

  useEffect(() => createThread(), []);

  return null;
}
