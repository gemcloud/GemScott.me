import React from 'react'
import { useMdxComponentsContext } from '@/context/MdxComponents'
import TimeLineVerticalAlternating from '@/components/Timelines/TimeLineVerticalAlternating'

const CVTimelines: React.FC = () => {
	const { timelines } = useMdxComponentsContext()

	return (
		<div className='timeline-container relative flex w-full flex-col after:absolute after:h-full after:w-1 after:bg-lime-700 dark:after:bg-dark'>
			{timelines.map((timeline, i) => (
				<TimeLineVerticalAlternating
					key={i}
					index={i}
					data={timeline}
					// child  data={...timeline}
				></TimeLineVerticalAlternating>
			))}
		</div>
	)
}

export default CVTimelines
