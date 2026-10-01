---
title: Astro の Content Collections メモ
date: 2026-09-22
tags: [技術, Astro]
---

Content Collections を使うと、Markdown の frontmatter に型をつけられます。

```ts
const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});
```

必須項目を書き忘れるとビルドが止まって教えてくれるので安心です。

> 型があると、未来の自分が助かる。
