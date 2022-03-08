/*
	Core library read our Markdown files ad CMS entry!
 * _pages and _pages/dynamic directory where the markdown content will live
 * _pages will have the home.md (aka index or /)
 * _pages/dynamic will be home to all other pages (aka [slug].js)
**/

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
// import { toUnicode } from 'punycode'

const pagesDirectory = join(process.cwd(), '_pages/scott')
// const dynamicPagesDirectory = join(pagesDirectory, 'dynamic')
// const dynamicPagesDirectory = join(pagesDirectory, 'resume')
const dynamicPagesDirectory = join(pagesDirectory, 'scottPages')

const pagesBlogDirectory = join(process.cwd(), '_pages')
const postBlogsDirectory = join(pagesBlogDirectory, 'postblogs')

/**
 * Gets all the files (slugs) in a directory
 * @param {fs.PathLike} dir :  the directory full path.
 * @return {string[]} all files name
 */
export function getSlugsFromDirectory(dir: fs.PathLike): string[] {
	return fs.readdirSync(dir)
}

/**
 * Gets the contents of a file
 * The gray-matter (metadata at the top of the file) will be
 * added to the item object, the content will be in
 * item.content and the file name (slug) will be in item.slug.
 * @param {string} dir : the directory full path.
 * @param {string} slug : got Markdown file name.
 * @param {string[]} fields : defined fields.
 * @return {string[]} : the contents of a file
 */

export function getBySlug(dir: string, slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '')

	// TODO: jump subfolders md file only.
	const fullPath = join(dir, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	// MD format
	// data is frontmatter === gemindex | title | image | navigation | Footer
	// content === Md file content
	const { data, content } = matter(fileContents)
	const items: any = {}

	// Ensure only the minimal needed data is exposed
	// Object.keys(fields).forEach(key => {
	fields.forEach(key => {
		if (key === 'slug') {
			items['slug'] = realSlug
		}
		if (key === 'content') {
			items[key] = content
		}

		if (data[key]) {
			items[key] = data[key]
		}
	})
	return items
}

export function getPageContentBySlug(slug: string, fields: string[] = []) {
	return getBySlug(pagesDirectory, slug, fields)
}

/**
 * Returns contents of a page in the _pages/dynamic directory
 * @param {string[]} slug : got Markdown file name.
 * @param {string[]} fields : defined fields.
 * @return {string[]} : contents of one page.
 */
export function getDynamicPageContentBySlug(
	slug: string,
	fields: string[] = []
) {
	return getBySlug(dynamicPagesDirectory, slug, fields)
}

/**
 * Returns a list of all the pages in the _pages/dynamic directory
 * @param {string[]} fields : defined fields.
 * @return {string[]} : a list of all the pages in the _pages/dynamic directory
 */
export function getAllDynamicPages(fields: string[] = []) {
	const slugs = getSlugsFromDirectory(dynamicPagesDirectory)
	const pages = slugs.map(slug => getDynamicPageContentBySlug(slug, fields))
	return pages
}

export function getAllBlogPosts() {
	console.log('getAllBlogPosts')
	// const pagesDirectory = join(process.cwd(), '_pages')
	// const postBlogsDirectory = join(pagesDirectory, 'postblogs')

	const files = fs.readdirSync(postBlogsDirectory)

	return files.map(fileName => {
		const slug = fileName.replace('.md', '')
		const fullPath = join(postBlogsDirectory, `${fileName}`)
		const readFile = fs.readFileSync(fullPath, 'utf8')

		const { data: frontmatter } = matter(readFile)
		return {
			slug,
			frontmatter,
		}
	})
}
