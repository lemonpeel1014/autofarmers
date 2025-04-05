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
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
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

export function useAddMessage({
  threadId,
  onMutate,
  onSuccess = undefined,
}: {
  threadId: number;
  onMutate?: (message: string) => void;
  onSuccess?: (agentNames: string[]) => void;
}) {
  return useMutation({
    mutationKey: ['addMessage', threadId] as const,
    mutationFn: async (message: string) => {
      const response = await fetch(`/api/threads/${threadId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ threadId, message }),
      });
      if (!response.ok) {
        throw new Error('Failed to add message');
      }

      const agentNames = message.split('\n').flatMap((line) =>
        line
          .split(' ')
          .filter((word) => word.startsWith('@'))
          .map((word) => word.slice(1)),
      );
      return agentNames;
    },
    onMutate: async (message) => {
      onMutate?.(message);
    },
    onSuccess: (agentNames) => {
      if (!agentNames || agentNames.length === 0) return;
      onSuccess?.(agentNames);
    },
  });
}
