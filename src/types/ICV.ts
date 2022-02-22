import { ITechnology } from '@/types/ITechnology'
import { ICvTmeline } from '@/types/ICvTmeline'

export interface ICV {
	slug: string
	gemindex: string
	birthdate: string
	title: string
	image: string
	ingredients: string[]
	technologies: ITechnology[]
	timelines: ICvTmeline[]
}
