import { messageSchema } from '@/data/thread';
import { useMutation, useQuery } from '@tanstack/react-query';
import { z } from 'zod';

export function useCreateThread({
  onSuccess = undefined,
}: {
  onSuccess?: (data: { threadId: number }) => void;
}) {
  return useMutation({
    mutationKey: ['createThread'] as const,
    mutationFn: async () => {
      const response = await fetch('/api/threads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to create thread');
      }
      return response.json();
    },
    onSuccess,
  });
}

export function useGetMessages({ threadId }: { threadId: number }) {
  return useQuery({
    queryKey: ['thread', { threadId }] as const,
    queryFn: async ({ queryKey: [_, { threadId }] }) => {
      const response = await fetch(`/api/threads/${threadId}/messages`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch thread');
      }
      const { success, data, error } = z
        .array(messageSchema)
        .safeParse(await response.json());
      if (!success) {
        throw new Error(error.message);
      }

      return data;
    },
    enabled: !!threadId,
  });
}
