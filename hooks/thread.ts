import { useMutation, useQuery } from '@tanstack/react-query';
import { schemas } from '@/data';

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
