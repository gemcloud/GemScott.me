import React from 'react'
import CvCard from '@/components/Timelines/CvCard'
import { ICvTmeline } from '@/types/ICvTmeline'

type Props = {
	index: number
	data: ICvTmeline
}

// export default function TimeLineVerticalAlternating(param: ICvTmeline) {
// const TimeLineVerticalAlternating = (index: number, data: ICvTmeline) => {

const TimeLineVerticalAlternating: React.FC<Props> = ({
	index,
	data,
}: Props) => {
	return (
		<div
			className='timeline-item dark:after:bg-darkgrey relative z-10 flex w-1/2 after:absolute
                        after:right-4 after:h-4 after:w-4 after:rotate-45 after:transform after:bg-white
                        odd:justify-end odd:pr-6 odd:text-right 
                        even:self-end even:pl-6 even:after:right-auto even:after:left-4'
			data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
		>
			<div className='shadow relative rounded border-2 border-solid border-lime-600 p-4 dark:text-lime-700 sm:max-w-[80%]'>
				<CvCard
					timeKey={data.timeKey}
					cardTitle={data.cardTitle}
					companyName={data.companyName}
					companyLocation={data.companyLocation}
					cardSubtitle={data.cardSubtitle}
					cardDetailedText={data.cardDetailedText}
					referenceUrl={data.referenceUrl}
				></CvCard>
				<span
					className={`border-primary top-timelineCircle absolute h-4 w-4 rounded-full border-4 border-solid bg-purple-700 ${
						index % 2 === 0 ? '-right-8' : '-left-8'
					}`}
				/>
			</div>
		</div>
	)
}

export default TimeLineVerticalAlternating
