import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useGetTokenPrice(
  tokens: {
    id: string;
    address: string;
  }[],
) {
  return useQuery({
    initialData: [],
    queryKey: ['coingecko', tokens] as const,
    queryFn: async ({ queryKey: [_, tokens] }) => {
      return await Promise.all(
        tokens.map(async ({ address, id: tokenId }) => {
          const response = await axios.get<{
            price: number;
          }>(`/api/token_price?tokenId=${tokenId}&address=${address}`);
          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }

          return response.data['price'];
        }),
      );
    },
    enabled: tokens && tokens.length > 0,
  });
}
