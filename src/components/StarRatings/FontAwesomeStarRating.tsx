import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons'

type Props = {
	amount: number
}

export default function FontAwesomeStarRating(param: Props) {
	return (
		// const renderStars = (amount: number) =>
		// eslint-disable-next-line prefer-spread
		Array.apply(null, [1, 2, 3, 4, 5]).map((_, i) => (
			<span className='star text-blue-900' key={i}>
				<FontAwesomeIcon
					className={`h-6 w-6 fill-current text-blue-900 ${
						i < param.amount ? 'full' : ''
					}`}
					icon={i < param.amount ? faStarFull : faStarEmpty}
				/>
			</span>
		))
	)
}
