// import { join } from 'path'
import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { LinksAttributes } from '@/types/IPageMdStructure'
import Layout from '@/components/Layouts/SiteLayout'
import PrintMarkdown from '@/components/Markdown/PrintMarkdown'
import WithImage from '@/components/Markdown/WithImage'

type Props = {
	children?: ReactNode
	slug: string
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
	// const canonicalUrl = process.env.CANONICAL_URL!
	// const canonical = join(canonicalUrl, slug)
	return (
		<>
			<Layout pageTitle={title} links={links}>
				<NextSeo
					title={title}
					// canonical={canonical}
					openGraph={{
						// url: canonical,
						url: slug,
						title: `${title} | Scott Personal WebSite`,
					}}
				/>
				{/* 
					We implement dynamic page by page-style here! 
					There is a page-style key for each page (Markdown page header),
					and then switch page-style to call related component.
					render page content below 
				*/}
				{image ? (
					<WithImage markdown={markdown} image={image} />
				) : (
					<PrintMarkdown markdownString={markdown} />
				)}
			</Layout>
		</>
	)
}
