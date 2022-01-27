import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { LinksAttributes } from '@/types/IPageMdStructure'
// import { join } from 'path'
// import PropTypes from 'prop-types';
import Layout from '@/components/Layout'
import PrintMarkdown from '@/components/Markdown/PrintMarkdown'
// import GemMarkdown from '@/components/markdown/GemMarkdown'
import WithImage from '@/components/Markdown/WithImage'

type Props = {
	children?: ReactNode
	slug: string
	// index: number
	gemindex: string
	title: string
	image: string
	markdown: string
	links: LinksAttributes[]
}

export default function DynamicLayout({
	slug,
	gemindex,
	title,
	image,
	markdown,
	links,
}: Props) {
	// const canonical = join(process.env.CANONICAL_URL, slug)
	return (
		<>
			<Layout pageTitle={title} links={links}>
				<NextSeo />
				{/* render page content below */}
				{image ? (
					<WithImage markdown={markdown} image={image} />
				) : (
					// <PrintMarkdown markdown={markdown} />
					<PrintMarkdown markdownString={markdown} />
					// <GemMarkdown content={markdown} />
				)}
			</Layout>
		</>
		// <Layout pageTitle={title} links={links}>
		// 	<NextSeo
		// 		title={title}
		// 		canonical={canonical}
		// 		openGraph={{
		// 			url: canonical,
		// 			title: `${title} | Wallis Family Mediation`,
		// 		}}
		// 	/>
		// 	{image ? (
		// 		<WithImage markdown={markdown} image={image} />
		// 	) : (
		// 		<PrintMarkdown markdown={markdown} />
		// 	)}
		// </Layout>
	)
}
