import React from 'react'
import Image from 'next/image'
import PrintMarkdown from '@/components/Markdown/PrintMarkdown'

interface IProps {
	markdown: string
	image: string
}

export default function LeftImgRight({ markdown, image }: IProps) {
	const imgSrc = require(`../../../public/images/${image}`)

	return (
		<div className='grid content-center items-center justify-items-center gap-8 md:grid-cols-2 md:gap-0'>
			<div className='mx-auto'>
				<Image
					className='rounded-full'
					priority
					alt='image alt'
					src={imgSrc}
					placeholder='blur'
				/>
			</div>
			<div className='mt-12 rounded-lg bg-sky-200 p-6 md:mt-0'>
				<PrintMarkdown markdownString={markdown} />
			</div>
		</div>
	)
}
