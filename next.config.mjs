/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs_ci_cd',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
