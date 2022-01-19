import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import SeoData from './next-seo.json'

// type IMetaProps = {
//   title: string;
//   description: string;
//   canonical?: string;
// };

// const Meta = (props: IMetaProps) => {
const SeoMeta = () => {
	const router = useRouter()

	return (
		<>
			<Head>
				<meta charSet='UTF-8' key='charset' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
					key='viewport'
				/>
				<link
					rel='apple-touch-icon'
					href={`${router.basePath}/apple-touch-icon.png`}
					key='apple'
				/>
				{/* Add an Emoji Favicon to your site! */}
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>'
				/>
				{/* we get rid off image file for favicon 
          <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} key="favicon" /> */}
				{/* Add google analytics here */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag("js", new Date());
                gtag("config", "UA-125864873-1");
              `,
					}}
				></script>
				<link rel='preconnect' href='https://www.google-analytics.com' />
				<script
					async
					src='https://code.iconify.design/1/1.0.4/iconify.min.js'
				></script>
			</Head>
			<NextSeo {...SeoData} />
		</>
	)
}

export { SeoMeta }
