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
    city: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    region: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    closesAt: z.coerce.date().optional(),
    views: z.coerce.number().int().min(0).optional(),
    watchers: z.coerce.number().int().min(0).optional(),

    colour: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    dimensions: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),


    sellerId: z.string().length(24),

    questions: z.array(
        z.object({
            text: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
            answer: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional()
        })
    ).optional()
}).strip();
