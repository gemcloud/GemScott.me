import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Items = {
	[key: string]: string
}

type Post = {
	data: {
		[key: string]: string
	}
	content: string
}

const POSTS_PATH = join(process.cwd(), '_pages/scott')

function getPostFilePaths(locale?: string): string[] {
	return (
		fs
			.readdirSync(join(POSTS_PATH, ``))
			// Only include md(x) files
			.filter(path => /\.mdx?$/.test(path))
		// .filter(path => /\.md?$/.test(path))
	)
}

export function getPost(slug: string, locale?: string): Post {
	const fullPath = join(POSTS_PATH, ``, `${slug}.mdx`)
	// const fullPath = join(POSTS_PATH, ``, `${slug}.md`)
	// console.log('fullPath = ' + fullPath)

	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)

	return { data, content }
}

export function getPostItems(
	filePath: string,
	fields: string[] = [],
	locale?: string
): Items {
	// console.log('filePath = ' + filePath)
	const slug = filePath.replace(/\.mdx?$/, '')
	// const slug = filePath.replace(/\.md?$/, '')
	const { data, content } = getPost(slug, locale)

	// console.log('datatitle = ' + data.gemindex)

	const items: Items = {}

	// console.log('fields = ' + fields)
	// Ensure only the minimal needed data is exposed
	fields.forEach(field => {
		if (field === 'slug') {
			items[field] = slug
		}
		if (field === 'content') {
			items[field] = content
		}

		if (data[field]) {
			// console.log('data = ' + data[field])
			items[field] = data[field]
		}
	})

	return items
}

export function getAllPosts(fields: string[] = [], locale?: string): Items[] {
	const filePaths = getPostFilePaths()
	const posts = filePaths
		.map(filePath => getPostItems(filePath, fields, locale))
		// sort posts by date in descending order
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	return posts
}
