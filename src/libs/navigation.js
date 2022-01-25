/*
	Get whole web site navigation links data by read markdown files!

**/
// import { join } from 'path'
import { getAllDynamicPages, getPageContentBySlug } from './markdown'

// type Props = {
// 	title: string
// 	slug: string
// 	navigation: boolean
// 	footer: boolean
// }

export function getNavigationLinks() {
	const fields = ['title', 'slug', 'navigation', 'footer']
	const dynamicPages = getAllDynamicPages(fields)

	const home = getPageContentBySlug('home', fields)

	// TODO: fixed "Property 'title' does not exist on type '{}'.ts(2339)"???
	// const links = [{ ...home, slug: '/' }, ...dynamicPages].map(
	// <== your url not include "/" on first location.
	const links = [{ ...home, slug: '' }, ...dynamicPages].map(
		// ({ title, slug, navigation, footer }: Props) => ({
		({ title, slug, navigation, footer }) => ({
			title,
			// href: join('/', slug), // <== your url not include "/" on first location.
			href: slug,
			navigation: navigation || false,
			footer: footer || false,
		})
	)

	return links
}
