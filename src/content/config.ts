import { defineCollection, z } from 'astro:content';

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    venue: z.string(),
    year: z.number(),
    award: z.string().optional(),
    arxiv: z.string().url().optional(),
    pdf: z.string().optional(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    number: z.string(),
    caption: z.string(),
    captionZh: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    href: z.string().optional(),
    imagePosition: z.string().default('center center'),
    order: z.number().default(0),
  }),
});

export const collections = { research, projects };
