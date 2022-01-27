import React from 'react'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/Layouts/BlogLayout'

export async function getStaticProps() {
	const pagesDirectory = join(process.cwd(), '_pages')
	const postBlogsDirectory = join(pagesDirectory, 'postblogs')

	const files = fs.readdirSync(postBlogsDirectory)

	const posts = files.map(fileName => {
		const slug = fileName.replace('.md', '')
		const fullPath = join(postBlogsDirectory, `${fileName}`)
		const readFile = fs.readFileSync(fullPath, 'utf8')

		const { data: frontmatter } = matter(readFile)
		return {
			slug,
			frontmatter,
		}
	})

	return {
		props: {
			posts,
		},
	}
}

export default function Blog({ posts }: any) {
	return (
		<BlogLayout>
			<div className='grid grid-cols-1 p-4 md:grid-cols-3 md:p-0 lg:grid-cols-4'>
				{posts.map(({ slug, frontmatter }: any) => (
					<div
						key={slug}
						className='flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg marker:m-2'
					>
						<Link href={`/post/${slug}`}>
							<a>
								<Image
									width={650}
									height={340}
									alt={frontmatter.title}
									src={`/${frontmatter.socialImage}`}
								/>
								<h1 className='p-4'>{frontmatter.title}</h1>
							</a>
						</Link>
					</div>
				))}
			</div>
		</BlogLayout>
	)
}
