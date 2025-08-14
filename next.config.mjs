/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ REMOVA: output: 'export' - incompatível com Server Actions
  
  transpilePackages: ['lucide-react'],
  serverExternalPackages: ['mongoose'],
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
