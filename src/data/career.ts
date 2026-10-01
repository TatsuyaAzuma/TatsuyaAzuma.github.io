export type CareerItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

// 新しい順に並べる
export const career: CareerItem[] = [
  {
    period: '2024 — 現在',
    title: 'ソフトウェアエンジニア',
    org: 'Example 株式会社',
    description: 'Web アプリケーションのフロントエンドとバックエンド開発を担当。',
  },
  {
    period: '2022 — 2024',
    title: 'ジュニアエンジニア',
    org: 'Sample Tech',
    description: '社内ツールの開発・運用。テスト自動化の導入を推進。',
  },
  {
    period: '2018 — 2022',
    title: '情報工学科',
    org: 'Dummy 大学',
    description: 'プログラミング言語と分散システムを専攻。',
  },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Rust', 'Go'] },
  { group: 'Frontend', items: ['React', 'Astro', 'CSS'] },
  { group: 'Backend', items: ['Node.js', 'PostgreSQL', 'Docker'] },
  { group: 'Tools', items: ['Git', 'Linux', 'GitHub Actions'] },
];
