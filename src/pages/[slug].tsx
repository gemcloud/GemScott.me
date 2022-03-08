import React from 'react'
import { LinksAttributes, PageAttributes } from '@/types/IPageMdStructure'
import DynamicLayout from '@/components/Layouts/DynamicLayout'
import {
	getDynamicPageContentBySlug,
	getAllDynamicPages,
	getAllBlogPosts,
} from '@/libs/gemMarkdown'
import { getNavigationLinks } from '@/libs/gemNavigation'

type Props = {
	page: PageAttributes
	links: LinksAttributes[]
	blogPosts: any
}

export default function DynamicPage({ page, links, blogPosts }: Props) {
	const { gemindex, title, template, image, slug, markdown } = page
	return (
		<DynamicLayout
			gemindex={gemindex}
			title={title}
			template={template}
			image={image}
			slug={slug}
			markdown={markdown}
			posts={blogPosts}
			links={links}
		/>
	)
}

export async function getStaticProps({ params }: any) {
	const links = getNavigationLinks()
	const blogPosts = getAllBlogPosts()
	const { slug } = params
	const page = getDynamicPageContentBySlug(slug, [
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
				markdown: page.content,
			},
			links,
			blogPosts,
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
