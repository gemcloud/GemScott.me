// credit: https://github.com/kr-anurag/portfolio/blob/main/pages/_document.tsx
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppConfig } from '../utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const originalRenderPage = ctx.renderPage

		// Run the React rendering logic synchronously
		ctx.renderPage = () =>
			originalRenderPage({
				// Useful for wrapping the whole react tree
				enhanceApp: (App: any) => App,
				// Useful for wrapping in a per-page basis
				enhanceComponent: (Component: any) => Component,
			})

		// Run the parent `getInitialProps`, it now includes the custom `renderPage`
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			// <Html lang='en'>
			<Html lang={AppConfig.locale}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
