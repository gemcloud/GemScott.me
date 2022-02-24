import React from 'react'
import { LinksAttributes, PageAttributes } from '@/types/IPageMdStructure'
import DynamicLayout from '@/components/Layouts/DynamicLayout'
import {
	getDynamicPageContentBySlug,
	getAllDynamicPages,
} from '@/libs/gemMarkdown'
import { getNavigationLinks } from '@/libs/gemNavigation'

type Props = {
	page: PageAttributes
	links: LinksAttributes[]
}

export default function DynamicPage({ page, links }: Props) {
	const { gemindex, title, template, image, slug, markdown } = page
	return (
		<DynamicLayout
			gemindex={gemindex}
			title={title}
			template={template}
			image={image}
			slug={slug}
			markdown={markdown}
			links={links}
		/>
	)
}

export async function getStaticProps({ params }: any) {
	const links = getNavigationLinks()
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
