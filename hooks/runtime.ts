import { useMutation } from '@tanstack/react-query';

export function useRunAgents({
  threadId,
  onSuccess = undefined,
}: {
  threadId: number;
  onSuccess?: () => void;
}) {
  return useMutation({
    mutationKey: ['runAgents', threadId] as const,
    mutationFn: async (agentNames: string[]) => {
      const response = await fetch(`/api/runtime`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ threadId, agentNames }),
      });
      if (!response.ok) {
        throw new Error('Failed to run agents');
      }
    },
    onSuccess: () => {
      onSuccess?.();
    },
  });
}
