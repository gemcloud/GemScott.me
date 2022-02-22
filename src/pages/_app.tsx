import '@/styles/globals.css'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { MdxComponentsProvider } from '@/context/MdxComponents'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute='class'>
			<MdxComponentsProvider>
				<Component {...pageProps} />
			</MdxComponentsProvider>
		</ThemeProvider>
	)
}

export default MyApp
