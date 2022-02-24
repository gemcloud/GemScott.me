/* 
    Get web page structure from MD files!

**/

export interface PageAttributes {
	// index: number // not use number to use string. looks " compiling /[slug]..." on error!!!
	// maybe need toString etc...
	gemindex: string // format A9999 S9999
	title: string
	template: string
	slug: string
	image: string
	markdown: string
}

export interface LinksAttributes {
	gemindex: string
	title: string
	template: string
	href: string
	navigation: boolean
	footer: string
}

/**
 *  demo some of TypeScript data structure!
 */

export interface IProductItem {
	id: number
	title: string
	description: string
	category: string
	image: string
	price: number
	quantity: number
}

// type ProductType =
// 	| {
// 			items: IProductItem[]
// 			saveItem: (item: ICartItem) => void
// 			updateItem: (id: number) => void
// 			removeItem: (id: number) => void
// 	  }
// 	| undefined
