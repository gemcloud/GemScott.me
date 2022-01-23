/* 
    Get web page structure from MD files!

**/

export interface PageAttributes {
	title: string
	slug: string
	image: string
	markdown: string
}

export interface LinksAttributes {
	// index: string
	title: string
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
