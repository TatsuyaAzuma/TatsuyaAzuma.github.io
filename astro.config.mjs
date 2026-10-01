// @ts-check
import { defineConfig } from 'astro/config';

// ユーザーサイト（https://<ユーザー名>.github.io）として公開するため base は不要。
export default defineConfig({
  site: 'https://tatsuyaazuma.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
    },
  },
});
