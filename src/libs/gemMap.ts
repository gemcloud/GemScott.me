// https://stackoverflow.com/questions/38324949/error-ts2339-property-x-does-not-exist-on-type-y
export class GemMap<T> {
	private items: { [key: string]: T }

	public constructor() {
		this.items = Object.create(null)
	}

	public set(key: string, value: T): void {
		this.items[key] = value
	}

	public get(key: string): T {
		return this.items[key]
	}

	public remove(key: string): T {
		const value = this.get(key)
		delete this.items[key]
		return value
	}
}

// function getMainImageUrl(images: Map<string>): string {
// 	return images.get('main')
// }
