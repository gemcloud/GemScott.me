/* eslint-disable react/prop-types */
import React from 'react'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import BlogLayout from '@/components/Layouts/BlogLayout'

export async function getStaticProps() {
	// const files = fs.readdirSync('../_pages/posts')
	// const path = require('path')
	// const files = fs.readFileSync(path.resolve(__dirname, '../_pages/posts')) // get 'C:\VGuanProjectJam\GemScott.me\.next\server\_pages\posts'

	const pagesDirectory = join(process.cwd(), '_pages')
	const postBlogsDirectory = join(pagesDirectory, 'postblogs')

	const files = fs.readdirSync(postBlogsDirectory)

	const posts = files.map(fileName => {
		const slug = fileName.replace('.md', '')
		// const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')

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

export default function Home({ posts }) {
	return (
		<BlogLayout>
			<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
				{posts.map(({ slug, frontmatter }) => (
					<div
						key={slug}
						className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
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
