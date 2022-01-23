/** To explain what the function does.
 * @param :
 * @return {JSX.Element} The JSX Code for the Home Page
 */
import React from 'react'
// import { NextPage, GetStaticProps } from 'next'
import { GetStaticProps } from 'next'

import DynamicLayout from '@/components/DynamicLayout'
import { getPageContentBySlug } from '@/libs/markdown'
import { getNavigationLinks } from '@/libs/navigation'
import { LinksAttributes, PageAttributes } from '@/types/IPageMdStructure'

type Props = {
	page: PageAttributes
	links: LinksAttributes[] // PropTypes.arrayOf
}

// export default function IndexPage({ page }: Props, links: Props) {
function IndexPage({ page, links }: Props) {
	// const { title, image, slug, markdown } = page
	// const { pageAttributes } = page
	// console.log(
	// 	'page==>' +
	// 		page.title +
	// 		' | ' +
	// 		page.slug +
	// 		' | ' +
	// 		page.image +
	// 		' | ' +
	// 		page.markdown
	// )
	// console.log('links==>' + { links })

	return (
		<DynamicLayout
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
		'title',
		'image',
		'slug',
		'content',
	])

	return {
		props: {
			page: {
				...page,
				markdown: page,
			},
			links: { ...links_ },
		},
	}
}

export default IndexPage // export me!
