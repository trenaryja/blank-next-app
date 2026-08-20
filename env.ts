import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// Validated at boot — a missing secret throws here with a named message, not `undefined` mid-request.
// `next.config.ts` imports this module, so validation runs on every dev start and build.
// This is a scaffold: the schema below is an example. Replace it, and delete anything unused.
export const env = createEnv({
	server: {},
	client: {
		NEXT_PUBLIC_SITE_URL: z.url().optional(),
	},
	// Only client vars are listed. Next replaces `process.env.NEXT_PUBLIC_*` by literal text match
	// at build time, so those must appear verbatim to reach the browser. Server vars are read from
	// `process.env` at runtime and need no mapping — Next stopped static-analyzing them in 13.4.4.
	experimental__runtimeEnv: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
	},
	emptyStringAsUndefined: true, // a set-but-blank var reads as missing, not ''
	skipValidation: !!process.env.SKIP_ENV_VALIDATION, // escape hatch for lint/typecheck-only CI
})
