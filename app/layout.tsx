import type { Metadata } from 'next'

import { ThemeProvider } from '@trenaryja/ui'

import './globals.css'

export const metadata: Metadata = {
	title: 'Blank Next App',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html suppressHydrationWarning lang='en'>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	)
}
