import { z } from 'zod';

export const schemas = {
  thread: z.object({
    id: z.number(),
  }),
};
