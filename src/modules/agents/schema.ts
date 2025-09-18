import { z } from "zod";

export const agentsInsertSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  instructions: z.string().min(1, { message: "Instruction are required" }),
});

export const agentsUpdatSchema = agentsInsertSchema.extend({
  id: z.string().min(1, { message: "Id is required" }),
});
