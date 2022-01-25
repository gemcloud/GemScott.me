import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import Navigation from '@/components/Navigation'
import { LinksAttributes } from '@/types/IPageMdStructure'
import Link from 'next/link'

type Props = { links: LinksAttributes[] }

// const LogoLetter = ({ letter }: { letter: string }) => (
// 	<span className='letter inline-block top-0 relative'>{letter}</span>
// )

export default function Header({ links }: Props) {
	const imgSrc = require('../../public/images/tigers/tiger-cute-me.jpg')
	return (
		<div className='w-screen'>
			<Container>
				{/* <header className='bg-fuchsia-100 mb-8 py-4'> */}
				<div className='bg-fuchsia-100 flex items-center font-open-sans justify-between h-24 w-full'>
					<div className='flex h-full justify-between items-center'>
						<div className='hidden sm:flex pt-2 h-full w-32'>
							<Link passHref href={{ pathname: '/' }}>
								{/* <a className='logo flex flex-row text-lg lg:text-2xl'>
									<LogoLetter letter='s' />
									<LogoLetter letter='c' />
									<LogoLetter letter='o' />
									<LogoLetter letter='t' />
									<LogoLetter letter='t' />
									<span>&nbsp;</span>
									<LogoLetter letter='t' />
									<LogoLetter letter='i' />
									<LogoLetter letter='g' />
									<LogoLetter letter='e' />
									<LogoLetter letter='r' />
								</a> */}
								<Image
									src={imgSrc}
									alt='Tiger headshot'
									className='h-full sm:ml-8 sm:pr-8'
								></Image>
							</Link>
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
