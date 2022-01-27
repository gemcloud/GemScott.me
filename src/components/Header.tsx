import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Container from '@/components/Container'
import Navigation from '@/components/Navigation'
import { LinksAttributes } from '@/types/IPageMdStructure'
import Link from 'next/link'

type Props = { links: LinksAttributes[] }

// const LogoLetter = ({ letter }: { letter: string }) => (
// 	<span className='letter inline-block top-0 relative'>{letter}</span>
// )

export default function Header({ links }: Props) {
	const { theme, setTheme } = useTheme()
	const imgSrc = require('../../public/images/tigers/tiger-cute-me.jpg')
	// const imgSrc = require('../../public/images/tigers/tiger-cute-me.jpg')
	// const imgSrc = require('../../public/images/tigers/tiger-cute_001.png')
	return (
		<div className='w-screen'>
			<Container>
				{/* <header className='bg-fuchsia-100 mb-8 py-4'> */}
				<div className='font-open-sans flex h-24 w-full items-center justify-between bg-sky-200'>
					<div className='flex h-full items-center justify-between'>
						<div className='relative h-20 w-20 overflow-hidden rounded-full'>
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
									width={90}
									height={90}
									// layout='fill'
									// objectFit='contain'
									// className='h-full sm:ml-8 sm:pr-8'
								></Image>
							</Link>
						</div>
						<div className='w-10/12'>
							<h1 className='font-lato text-2xl font-light sm:text-3xl'>
								Your Name or Company Name
							</h1>
							<p className='text-gray-333 text-sm'>
								A<em className='text-black'> personal </em>
								service from a retired senior banker and realtor
							</p>
						</div>
					</div>
					<Navigation links={links} />
					<Image
						src='/icons/sun.svg'
						width={30}
						height={30}
						alt='Toggle theme'
						className='toggleTheme cursor-pointer'
						onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
					/>
				</div>
			</Container>
		</div>
	)
}
