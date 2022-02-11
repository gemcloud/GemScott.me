/*
	We are using 'next/image' component. 
	Do we not need react <picture><source> tag and "npm next-optimized-images"?
**/
import React from 'react'
import Image from 'next/image'
import PrintMarkdown from '@/components/Markdown/PrintMarkdown'

interface IProps {
	markdown: string
	image: string
}

export default function WithImage({ markdown, image }: IProps) {
	const imgSrc = require(`../../../public/images/${image}`)

	return (
		<div className='flex flex-col md:flex-row'>
			<div className='w-100 sm:pr-4 md:w-2/3 md:pr-8'>
				<PrintMarkdown markdownString={markdown} />
			</div>
			<div className='w-100 flex items-center justify-center md:w-1/3'>
				<Image
					className='rounded-full'
					priority
					alt='image alt'
					src={imgSrc}
					placeholder='blur'
				/>
			</div>
		</div>
	)
}
