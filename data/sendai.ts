import { z } from 'zod';

export const balanceSchema = z.object({
  sol: z.number(),
  tokens: z.array(
    z.object({
      tokenAddress: z.string(),
      name: z.string(),
      symbol: z.string(),
      balance: z.number(),
      decimals: z.number(),
    }),
  ),
});
