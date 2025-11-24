import sanitizeHtml from "sanitize-html";
import { z } from "zod";

export const sellerSanitizer = z.object({
  name: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
  email: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
  location: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
  joiningDate: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
  rating: z.coerce.number().min(0).max(5).default(0),
  }).strip();