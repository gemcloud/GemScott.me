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
	// const webPSrc = require(`../../images/${image}?webp`) // passed!!!
	const imgSrc = require(`../../../public/images/${image}`)

	return (
		<div className='flex flex-col md:flex-row'>
			<div className='w-100 md:w-2/3 sm:pr-4 md:pr-8'>
				<PrintMarkdown markdownString={markdown} />
			</div>
			<div className='w-100 md:w-1/3 flex items-center justify-center'>
				{/* <picture>
					<source srcSet={webPSrc} type='image/webp' />
					<source srcSet={imgSrc} type='image/jpeg' />
					<img src={imgSrc} alt='image alt' />
				</picture> */}
				<Image src={imgSrc} alt='image alt'></Image>
			</div>
		</div>
	)
}
