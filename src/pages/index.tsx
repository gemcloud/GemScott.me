/**
 * The WebSite index page
 * @param : page is the header of the markdown file.
 * @param : links is the Navigation bar items that generate by markdown files.
 * @return DynamicLayout Component.
 */
import React from 'react'
import { GetStaticProps } from 'next'
import DynamicLayout from '@/components/Layouts/DynamicLayout'
import { getPageContentBySlug } from '@/libs/gemMarkdown'
import { getNavigationLinks } from '@/libs/gemNavigation'
import { LinksAttributes, PageAttributes } from '@/types/IPageMdStructure'

// declare type.
type Props = {
	page: PageAttributes
	links: LinksAttributes[] // PropTypes.arrayOf
}

// export default function IndexPage({ page }: Props, links: Props) {
function IndexPage({ page, links }: Props) {
	console.log(' index page!')
	return (
		<DynamicLayout
			gemindex={page.gemindex}
			title={page.title}
			template={page.template}
			image={page.image}
			slug={page.slug}
			markdown={page.markdown}
			links={links}
		/>
	)
}

// get data for current page
export const getStaticProps: GetStaticProps = async () => {
	// get web site navigation bar data (links data)
	const links_ = getNavigationLinks()
	// Gets the content of all pages.
	// const homeName = 'scottHome'
	const page = getPageContentBySlug('home', [
		// const page = getPageContentBySlug('scottHome', [
		'gemindex',
		'title',
		'template',
		'image',
		'slug',
		'content',
	])

	return {
		props: {
			page: {
				...page,
				// markdown: page.content
				markdown: (page as any).content, // TS style.
			},
			links: { ...links_ },
		},
	}
}

export default IndexPage // export me!
