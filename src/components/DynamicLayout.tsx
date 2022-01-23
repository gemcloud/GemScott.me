import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { LinksAttributes } from '@/types/IPageMdStructure'
// import { join } from 'path'
// import PropTypes from 'prop-types';
import Layout from '@/components/Layout'
// import PrintMarkdown from './markdown/printMarkdown';
// import WithImage from './markdown/withImage';

type Props = {
	children?: ReactNode
	slug: string
	title: string
	image: string
	markdown: string
	links: LinksAttributes[]
}

export default function DynamicLayout({
	slug,
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
