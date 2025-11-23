import sanitizeHtml from "sanitize-html";
import { z } from "zod";

export const sellerSanitizer = z.object({
  name: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
  email: z.string().email().transform((val) => sanitizeHtml(val.trim())),
  rating: z.coerce.number().min(0).max(5).default(0),
  description: z.string()
    .optional()
    .transform((val) => val ? sanitizeHtml(val.trim()) : undefined) // ✅ guard against undefined
}).strip();