import sanitizeHtml from 'sanitize-html';
import {z} from 'zod';

export const itemSanitizer = z.object({
    title: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
    startPrice: z.coerce.number().min(0).optional(),
    reservePrice: z.coerce.number().min(1).optional(),
    createdAt: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    condition: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    imagePath: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    imageDescription: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    description: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    sellerId: z.string().length(24)
}).strip();