import { getCollection } from 'astro:content';

// draft: true のものは本番ビルドから除外する（開発中は表示）
const isPublished = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.PROD ? !data.draft : true;

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

export async function getDiary() {
  return (await getCollection('diary', isPublished)).sort(byDateDesc);
}

export async function getWorks() {
  return (await getCollection('works', isPublished)).sort(byDateDesc);
}

// frontmatter の日付は UTC 0時として読み込まれるので UTC で整形する
export function formatDate(date: Date) {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}
