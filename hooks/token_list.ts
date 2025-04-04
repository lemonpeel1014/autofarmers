import { useQuery } from '@tanstack/react-query';
import { TokenListProvider } from '@solana/spl-token-registry';

export function useGetTokenList(addresses: string[]) {
  return useQuery({
    initialData: [],
    queryKey: ['tokenList', { addresses }] as const,
    queryFn: async ({ queryKey: [_, { addresses }] }) => {
      const tokens = await new TokenListProvider()
        .resolve()
        .then((t) => t.getList());
      return tokens.filter((t) => addresses.includes(t.address));
    },
  });
}
