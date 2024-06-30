import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

const nextConfig = {
  // Your Next.js config here
  reactStrictMode: true,
  // Other configurations...
};

export default withNextIntl(nextConfig);
