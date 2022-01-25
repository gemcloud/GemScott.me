/*
	Core library read our Markdown files ad CMS entry!
 * _pages and _pages/dynamic directory where the markdown content will live
 * _pages will have the home.md (aka index or /)
 * _pages/dynamic will be home to all other pages (aka [slug].js)
**/

import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const pagesDirectory = join(process.cwd(), '_pages')
// const dynamicPagesDirectory = join(pagesDirectory, 'dynamic')
const dynamicPagesDirectory = join(pagesDirectory, 'portfolio')

/**
 * Gets all the files (slugs) in a directory
 * @param {fs.PathLike} dir :  the directory full path.
 * @return {string[]} all files name
 */
export function getSlugsFromDirectory(dir) {
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
// export function getBySlug(dir: string, slug: string, fields: string[] = []) {
export function getBySlug(dir, slug, fields = []) {
	const realSlug = slug.replace(/\.md$/, '')
	const fullPath = join(dir, `${realSlug}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	// MD format
	// data === title | image | navigation | Footer
	// content === Md file content
	const { data, content } = matter(fileContents)
	// console.log(fields)

	// Fixed "Element implicitly has an 'any' type because expression of type '"slug"' can't be used to index type '{}'."
	const items = {}
	// const items: string[] = []

	// Ensure only the minimal needed data is exposed
	fields.forEach(field => {
		if (field === 'slug') {
			items[field] = realSlug
		}
		if (field === 'content') {
			items[field] = content
		}

		if (data[field]) {
			items[field] = data[field]
		}
	})

	return items
}

// export function getPageContentBySlug(slug: string, fields: string[] = []) {
export function getPageContentBySlug(slug, fields = []) {
	return getBySlug(pagesDirectory, slug, fields)
}

/**
 * Returns contents of a page in the _pages/dynamic directory
 * @param {string[]} slug : got Markdown file name.
 * @param {string[]} fields : defined fields.
 * @return {string[]} : contents of one page.
 */
export function getDynamicPageContentBySlug(
	slug,
	fields = []
	// slug: string | string[],
	// slug: string,
	// fields: string[] = []
) {
	return getBySlug(dynamicPagesDirectory, slug, fields)
}

/**
 * Returns a list of all the pages in the _pages/dynamic directory
 * @param {string[]} fields : defined fields.
 * @return {string[]} : a list of all the pages in the _pages/dynamic directory
 */
// export function getAllDynamicPages(fields: string[] = []) {
export function getAllDynamicPages(fields = []) {
	const slugs = getSlugsFromDirectory(dynamicPagesDirectory)
	const pages = slugs.map(slug => getDynamicPageContentBySlug(slug, fields))
	return pages
}
