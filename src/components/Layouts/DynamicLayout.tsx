// import { join } from 'path'
import React, { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import { LinksAttributes } from '@/types/IPageMdStructure'
import Layout from '@/components/Layouts/SiteLayout'
import PrintMarkdown from '@/components/Markdown/PrintMarkdown'
import WithImage from '@/components/Markdown/WithImage'
import LeftImgRight from '../GemTemplates/LeftImgRight'
import LeftRightImg from '../GemTemplates/LeftRightImg'
import ProjectLanding from '../GemTemplates/ProjectLanding'
import BlogLanding from '../GemTemplates/BlogLanding'
import TemplateContact from '../GemTemplates/TemplateContact'
// import { getAllBlogPosts } from '@/libs/gemMarkdown'

type Props = {
	children?: ReactNode
	slug: string
	gemindex: string
	template: string
	title: string
	image: string
	markdown: string
	posts?: any
	myProjects?: any
	links: LinksAttributes[]
}

export default function DynamicLayout({
	slug,
	gemindex,
	title,
	template,
	image,
	markdown,
	posts,
	myProjects,
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

				{
					{
						LeftImgRight: (
							<LeftImgRight markdown={markdown} image={image}></LeftImgRight>
						),
						LeftRightImg: (
							<LeftRightImg markdown={markdown} image={image}></LeftRightImg>
						),
						WithImage: <WithImage markdown={markdown} image={image} />,
						MarkdownOnly: <PrintMarkdown markdownString={markdown} />,
						TemplateContact: <TemplateContact markdownString={markdown} />,
						ProjectLanding: <ProjectLanding projects={myProjects} />,
						BlogLanding: <BlogLanding posts={posts} />,
						undefined: <PrintMarkdown markdownString={markdown} />,
					}[template]
				}

				{/* {image ? (
					<WithImage markdown={markdown} image={image} />
				) : (
					<PrintMarkdown markdownString={markdown} />
				)} */}
			</Layout>
		</>
	)
}

// export async function getStaticProps() {
// 	const posts = getAllBlogPosts()
// 	return {
// 		props: {
// 			posts,
// 		},
// 	}
// }
