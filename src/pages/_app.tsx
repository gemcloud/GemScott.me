import '@/styles/TestingHeader.css'
import '@/styles/globals.scss'
import React from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp