import React from 'react'
import fs from 'fs'
import { join } from 'path'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import matter from 'gray-matter'
import md from 'markdown-it'
import BlogLayout from '@/components/Layouts/BlogLayout'

interface IProps {
	frontmatter: {
		title: string
		metaTitle: string
		metaDesc: string
		socialImage: string
		date: string
		tags: string
	}
	content: string
}

interface IParams extends ParsedUrlQuery {
	slug: string
}

// get path
const pagesDirectory = join(process.cwd(), '_pages')
const postBlogsDirectory = join(pagesDirectory, 'postblogs')

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(postBlogsDirectory)
	const paths = files.map(fileName => ({
		params: {
			slug: fileName.replace('.md', ''),
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { slug } = context.params as IParams
	const fullPath = join(postBlogsDirectory, `${slug}.md`)
	const blogFile = fs.readFileSync(fullPath, 'utf8')

	const { data: frontmatter, content } = matter(blogFile)
	return { props: { frontmatter, content } }
}

export default function PostPage({ frontmatter, content }: IProps) {
	return (
		<BlogLayout>
			<div className='prose mx-auto'>
				<h1>{frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
			</div>
		</BlogLayout>
	)
}

// *.js  or *.jsx
// export async function getStaticPaths() {
// 	const files = fs.readdirSync(postBlogsDirectory)

// 	const paths = files.map(fileName => ({
// 		params: {
// 			slug: fileName.replace('.md', ''),
// 		},
// 	}))
// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }

// export async function getStaticProps({ params: { slug } }) {
// 	const fullPath = join(postBlogsDirectory, `${slug}.md`)
// 	const blogFile = fs.readFileSync(fullPath, 'utf8')

// 	const { data: frontmatter, content } = matter(blogFile)
// 	return {
// 		props: {
// 			frontmatter,
// 			content,
// 		},
// 	}
// }
