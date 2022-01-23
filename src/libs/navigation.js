/*
	Get whole web site navigation links data by read markdown files!

**/
import { join } from 'path'
import { getAllDynamicPages, getPageContentBySlug } from './markdown'

export function getNavigationLinks() {
	const fields = ['title', 'slug', 'navigation', 'footer']
	const dynamicPages = getAllDynamicPages(fields)

	const home = getPageContentBySlug('home', fields)

	// TODO: fixed "Property 'title' does not exist on type '{}'.ts(2339)"???
	const links = [{ ...home, slug: '/' }, ...dynamicPages].map(
		({ title, slug, navigation, footer }) => ({
			title,
			href: join('/', slug),
			// href: slug,  //error!!!
			navigation: navigation || false,
			footer: footer || false,
		})
	)

	return links
}
