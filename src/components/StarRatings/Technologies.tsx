import React from 'react'
import { useMdxComponentsContext } from '@/context/MdxComponents'
import UnicodeStarRating from '@/components/StarRatings/UnicodeStarRating'

// export default function Technologies() {
const Technologies: React.FC = () => {
	const { technologies } = useMdxComponentsContext()

	return (
		<>
			{technologies.map((technology, i) => (
				<div key={i} className='mb-4 flex justify-between'>
					<div>{technology.name}</div>
					<div className='flex'>
						<UnicodeStarRating
							ratingOfStars={technology.numberOfStars}
						></UnicodeStarRating>
					</div>
				</div>
			))}
		</>
	)
}

export default Technologies
