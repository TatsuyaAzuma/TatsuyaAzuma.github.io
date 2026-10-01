import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 日記: src/content/diary/*.md を追加するだけで一覧・詳細ページに反映される
const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// 作品: src/content/works/*.md を追加するだけで一覧・詳細ページに反映される
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    // public/ からのパス（例: /works/foo.svg）
    thumbnail: z.string().optional(),
    tech: z.array(z.string()).default([]),
    url: z.url().optional(),
    repo: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { diary, works };
