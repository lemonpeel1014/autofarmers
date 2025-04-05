import { z } from 'zod';

export const runRequestSchema = z.object({
  threadId: z.number(),
  agentNames: z.array(z.string()),
});
