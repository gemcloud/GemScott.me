import React from 'react'

type Props = {
	index: number
	url: string
	children: any
}
// export default function TimelineItem({ index, url, children }) {
export default function TimelineItem(param: Props) {
	return (
		<div
			// className='timeline-item dark:after:bg-darkgrey-700 z-10 flex w-1/2 after:absolute after:right-4 after:h-4 after:w-4 after:rotate-45 after:transform after:bg-white odd:justify-end odd:pr-6 odd:text-right even:self-end even:pl-6 even:after:right-auto even:after:left-4'
			className='timeline-item dark:after:bg-darkgrey after:right-4 even:after:right-auto even:after:left-4 relative z-10
                        flex w-1/2 after:absolute after:h-4 after:w-4 after:rotate-45
                        after:transform after:bg-white odd:justify-end 
                        odd:pr-6 odd:text-right even:self-end even:pl-6'
			data-aos={`fade-${param.index % 2 === 0 ? 'left' : 'right'}`}
		>
			<div className='shadow relative rounded border-2 border-solid border-lime-600 p-4 dark:text-lime-700 sm:max-w-[80%]'>
				{param.children}
				<span
					className={`border-primary top-timelineCircle absolute h-4 w-4 rounded-full border-4 border-solid bg-purple-700 ${
						param.index % 2 === 0 ? '-right-8' : '-left-8'
					}`}
				/>
			</div>
		</div>
	)
}
