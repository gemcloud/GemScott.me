export interface ITimeline {
	index: number
	dateRange: string
	url: string
	yourTitle: string
	companyName: string
	location: string
	//
	cardTitle: string
	cardSubtitle: string
	cardDetailedText: string
	media: {
		type: 'IMAGE'
		source: {
			url: 'http://someurl/image.jpg'
		}
	}
}
