import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Navigation from '@/components/Navigation'
import { LinksAttributes } from '@/types/IPageMdStructure'

type Props = { links: LinksAttributes[] }

export default function Header({ links }: Props) {
	const imgSrc = require('../../public/images/tigers/tiger-cute-me.jpg')
	return (
		<div className='w-screen'>
			<Container>
				<div className='flex items-center font-open-sans justify-between h-24 w-full'>
					<div className='flex h-full justify-between items-center'>
						<div className='hidden sm:flex pt-2 h-full w-32'>
							<Image
								src={imgSrc}
								alt='Tiger headshot'
								className='h-full sm:ml-8 sm:pr-8'
							></Image>
						</div>
						<div className='w-10/12'>
							<h1 className='text-2xl sm:text-3xl font-light font-lato'>
								Your Name or Company Name
							</h1>
							<p className='text-gray-333 text-sm'>
								A<em className='text-black'> personal </em>
								service from a retired senior banker and realtor
							</p>
						</div>
					</div>
					<Navigation links={links} />
				</div>
			</Container>
		</div>
	)
}
