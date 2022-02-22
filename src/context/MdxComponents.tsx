import React from 'react'
import {
	createContext,
	useContext,
	useState,
	Dispatch,
	ReactElement,
	ReactNode,
	SetStateAction,
} from 'react'
import { ITechnology } from '@/types/ITechnology'
import { ICvTmeline } from '@/types/ICvTmeline'

type ContextProps = {
	lang: string | undefined
	setLang: Dispatch<SetStateAction<string | undefined>>

	technologies: ITechnology[]
	setTechnologies: Dispatch<SetStateAction<ITechnology[]>>

	timelines: ICvTmeline[]
	setTimelines: Dispatch<SetStateAction<ICvTmeline[]>>
	// add more ...
	ingredients: string[]
	setIngredients: Dispatch<SetStateAction<string[]>>
}

type Props = {
	children: ReactNode
}

const MdxComponentsContext = createContext({} as ContextProps)

export function MdxComponentsProvider({ children }: Props): ReactElement {
	const [lang, setLang] = useState<string | undefined>(undefined)
	const [technologies, setTechnologies] = useState<ITechnology[]>([])
	const [timelines, setTimelines] = useState<ICvTmeline[]>([])
	const [ingredients, setIngredients] = useState<string[]>([])

	return (
		<MdxComponentsContext.Provider
			value={{
				lang,
				setLang,
				technologies,
				setTechnologies,
				timelines,
				setTimelines,
				ingredients,
				setIngredients,
			}}
		>
			{children}
		</MdxComponentsContext.Provider>
	)
}

export function useMdxComponentsContext(): ContextProps {
	return useContext(MdxComponentsContext)
}
