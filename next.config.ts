import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://*.google.com https://*.gstatic.com https://grainy-gradients.vercel.app https://images.unsplash.com https://maps.googleapis.com https://*.googleapis.com https://*.google-analytics.com https://*.googletagmanager.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://maps.googleapis.com https://*.googleapis.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; frame-src 'self' https://www.google.com;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
