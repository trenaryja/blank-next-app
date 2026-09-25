import type { NextConfig } from 'next'
import '@/env'

const nextConfig: NextConfig = {
	reactCompiler: true,
	experimental: { turbopackRustReactCompiler: true },
}

export default nextConfig
