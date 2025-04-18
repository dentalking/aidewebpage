import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    // ESLint 검사를 빌드 과정에서 건너뜁니다
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
