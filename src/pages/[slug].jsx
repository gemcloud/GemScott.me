import React from 'react'
import PropTypes from 'prop-types'
import DynamicLayout from '@/components/DynamicLayout'
import {
	getDynamicPageContentBySlug,
	getAllDynamicPages,
} from '@/libs/markdown'
import { getNavigationLinks } from '@/libs/navigation'
// import { LinksAttributes, PageAttributes } from '@/types/IPageMdStructure'
// import { GetStaticPaths, GetStaticProps } from 'next'
// import { ParsedUrlQuery } from 'querystring'

// github.com/vercel/next.js/issues/22278

// interface IParams extends ParsedUrlQuery {
// 	slug: string[]
// }

export default function DynamicPage({ page, links }) {
	const { title, image, slug, markdown } = page
	return (
		<DynamicLayout
			title={title}
			image={image}
			slug={slug}
			markdown={markdown}
			links={links}
		/>
	)
}

DynamicPage.propTypes = {
	page: PropTypes.shape({
		title: PropTypes.string,
		slug: PropTypes.string,
		image: PropTypes.string,
		markdown: PropTypes.string,
	}).isRequired,
	links: PropTypes.arrayOf(
		PropTypes.exact({
			title: PropTypes.string,
			href: PropTypes.string,
			navigation: PropTypes.bool,
			footer: PropTypes.bool,
		})
	).isRequired,
}

export async function getStaticProps({ params }) {
	const links = getNavigationLinks()
	const { slug } = params
	const page = getDynamicPageContentBySlug(slug, [
		'title',
		'image',
		'slug',
		'content',
	])

	return {
		props: {
			page: {
				...page,
				markdown: page.content,
			},
			links,
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllDynamicPages(['slug'])
	const paths = posts.map(({ slug }) => ({
		params: {
			slug,
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

// type Props = {
// 	page: PageAttributes
// 	links: LinksAttributes[]
// }

// export default function DynamicPage({ page, links }: Props) {
// 	const { title, image, slug, markdown } = page
// 	return (
// 		<DynamicLayout
// 			title={title}
// 			image={image}
// 			slug={slug}
// 			markdown={markdown}
// 			links={links}
// 		/>
// 	)
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	// ['slug'] is fields
// 	// const posts = getAllDynamicPages(['slug'])
// 	const fields = ['slug']
// 	// TODO: fixed "Property 'slug' does not exist on type 'String'.ts(2339)" by GemMap???
// 	const posts = getAllDynamicPages(fields)

// 	const paths = posts.map(({ slug }) => ({
// 		params: { slug },
// 	}))

// 	return { paths, fallback: false }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
// 	try {
// 		// Fixed : Property 'slug' does not exist on type 'ParsedUrlQuery | undefined'???
// 		// https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript
// 		// const { slug } = params as IParams
// 		const links = getNavigationLinks()
// 		const page = getDynamicPageContentBySlug(slug, [
// 			'title',
// 			'image',
// 			'slug',
// 			'content',
// 		])
// 		return {
// 			props: {
// 				page: {
// 					...page,
// 					markdown: page.content,
// 				},
// 				links,
// 			},
// 		}
// 	// } catch (err: unknown) {
// 	} catch (err) {
// 		return { props: { errors: err.message } }
// 	}
// }
