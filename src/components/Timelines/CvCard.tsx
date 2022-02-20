import React from 'react'
// import { ICvTmeline } from '@/types/ICvTmeline'

type Props = {
	timeKey: string
	cardTitle: string
	referenceUrl: string
	companyName: string
	companyLocation: string
	cardSubtitle: string
	cardDetailedText: string
}

// export default function CvCard(param: ICvTmeline) {
export default function CvCard(param: Props) {
	return (
		<>
			<time className='text-grey text-xs'>{param.timeKey}</time>
			<p>
				{param.cardTitle} at{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
					href={param.referenceUrl}
				>
					{param.companyName}
				</a>
				, {param.companyLocation}
			</p>
			<p>{param.cardSubtitle}</p>
			<p>{param.cardDetailedText}</p>
		</>
	)
}
