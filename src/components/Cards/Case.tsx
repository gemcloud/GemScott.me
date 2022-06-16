import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'

type CaseProps = {
	url: string
	logoWidth: number
	logoAlt: string
	img: string
	tags: string[]
	children: JSX.Element | JSX.Element[]
}

export default function Case({
	url,
	logoWidth,
	logoAlt,
	img,
	tags,
	children,
}: CaseProps) {
	// We do not need "require" to loading image.
	// We only need put images file on the public folder, and set correct path
	// e.g. /logos/toshiba-leading-innovation.svg
	// NG ==> const imgSrc = require(`../../../public/images/${img}`)

	return (
		<div className='transition-duration-300 rounded-xl border-4 border-purple-500 p-6 transition-shadow ease-in-out hover:shadow-lg'>
			<div className='portfolio-case h-full'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className='flex h-full flex-col'
					href={url}
				>
					<div className='mb-4 h-24 max-h-24 text-center'>
						<Image
							width={logoWidth}
							height={100}
							alt={`Logo ${logoAlt}`}
							src={img}
							className='inline-block max-w-full lg:max-w-xs'
						/>
					</div>
					{children}
					<div className='mt-4 flex flex-grow flex-col justify-end'>
						<ul className='flex flex-wrap'>
							{tags.map(tag => {
								const key = uuidv4()
								return (
									<li
										className='my-1 mr-2 rounded-md bg-indigo-500 py-1 px-4 text-sm text-white'
										key={key}
									>
										{tag}
									</li>
								)
							})}
						</ul>
					</div>
				</a>
			</div>
		</div>
	)
}
