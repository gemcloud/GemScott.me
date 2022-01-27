/*
	Get whole web site navigation links data by read markdown files!
    Notice: using "next/link" V12 
        our url not include "/" on first character.
        	//Wrong:  const links = [{ ...home, slug: '/' }, ...dynamicPages].map(
        	const links = [{ ...home, slug: '' }, ...dynamicPages].map(

            //Wrong: href: join('/', slug), 
			href: slug,
**/
import { getAllDynamicPages, getPageContentBySlug } from './gemMarkdown'

export function getNavigationLinks() {
	// mapping your MD file front-section!
	// if you want add & get more MarkDown items, add below array[]!!!
	const fields = ['gemindex', 'title', 'slug', 'navigation', 'footer']
	const dynamicPages = getAllDynamicPages(fields)

	const home = getPageContentBySlug('home', fields)

	const links = [{ ...home, slug: '' }, ...dynamicPages].map(
		({ gemindex, title, slug, navigation, footer }: any) => ({
			gemindex,
			title,
			href: slug,
			navigation: navigation || false,
			footer: footer || false,
		})
	)
	return links.sort((a, b) =>
		b.gemindex < a.gemindex ? 1 : b.gemindex > a.gemindex ? -1 : 0
	)
	// return links
}
