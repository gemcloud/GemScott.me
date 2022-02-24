import React from 'react'
import Image from 'next/image'
import PrintMarkdown from '@/components/Markdown/PrintMarkdown'

interface IProps {
	markdown: string
	image: string
}

export default function LeftRightImg({ markdown, image }: IProps) {
	const imgSrc = require(`../../../public/images/${image}`)

	return (
		<div className='mx-auto grid content-center items-center md:grid-cols-2 md:gap-8'>
			{/* <h1 className='flex flex-col items-center text-4xl font-bold md:items-start md:text-6xl'>
				<PrintMarkdown markdownString={markdown} />
			</h1> */}
			<PrintMarkdown markdownString={markdown} />
			<div className='flex items-center justify-center'>
				<Image
					className='rounded-full'
					priority
					alt='Profile picture'
					src={imgSrc}
					placeholder='blur'
				/>
			</div>
		</div>
	)
}
