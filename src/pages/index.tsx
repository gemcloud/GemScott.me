/** To explain what the function does.
 * @param :
 * @return {JSX.Element} The JSX Code for the Home Page
 */
import React from 'react'
// import { NextPage, GetStaticProps } from 'next'
import { GetStaticProps } from 'next'

import DynamicLayout from '@/components/DynamicLayout'
import { getPageContentBySlug } from '@/libs/gemMarkdown'
import { getNavigationLinks } from '@/libs/gemNavigation'
import { LinksAttributes, PageAttributes } from '@/types/IPageMdStructure'

type Props = {
	page: PageAttributes
	links: LinksAttributes[] // PropTypes.arrayOf
}

// export default function IndexPage({ page }: Props, links: Props) {
function IndexPage({ page, links }: Props) {
	return (
		<DynamicLayout
			gemindex={page.gemindex}
			title={page.title}
			image={page.image}
			slug={page.slug}
			markdown={page.markdown}
			links={links}
		/>
	)
}

// get data for current page
export const getStaticProps: GetStaticProps = async () => {
	// get links data
	const links_ = getNavigationLinks()

	// console.log(links_)
	// get pages data
	// get md data for example.
	// const content = await import(`../content/pages/${'home'}.md`)
	// return { props: { content: content.default } }
	const page = getPageContentBySlug('home', [
		'gemindex',
		'title',
		'image',
		'slug',
		'content',
	])

	// const page = JSON.stringify(pages)

	// console.log(page)

	return {
		props: {
			page: {
				...page,
				// markdown: page.content
				markdown: (page as any).content,
			},
			links: { ...links_ },
		},
	}
}

export default IndexPage // export me!
