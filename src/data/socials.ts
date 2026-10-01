export type Social = {
  label: string;
  handle: string;
  href: string;
};

// your-username などを自分のアカウントに置き換えてください
export const socials: Social[] = [
  { label: 'GitHub', handle: '@TatsuyaAzuma', href: 'https://github.com/TatsuyaAzuma' },
  { label: 'X', handle: '@your-username', href: 'https://x.com/your-username' },
  { label: 'Zenn', handle: '@your-username', href: 'https://zenn.dev/your-username' },
];

export const email = 'hello@example.com';
