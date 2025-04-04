import { z } from 'zod';

export const schemas = {
  thread: z.object({
    id: z.number(),
  }),
  messages: z.array(
    z.object({
      id: z.number(),
      content: z.string(),
      sender: z.string(),
    }),
  ),
};
