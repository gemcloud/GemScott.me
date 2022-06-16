import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

const demoAnimation = () => {
	const router = useRouter()

	// eslint-disable-next-line react/prop-types
	const LogoLetter = ({ letter }) => (
		<span className='letter relative top-0 inline-block'>{letter}</span>
	)
	return (
		<>
			{/* <Link passHref href={{ pathname: '/' }}></Link> */}
			<h1>
				<a className='logo flex flex-row text-lg lg:text-2xl'>
					<LogoLetter letter='v' />
					<LogoLetter letter='i' />
					<LogoLetter letter='c' />
					<LogoLetter letter='t' />
					<LogoLetter letter='o' />
					<LogoLetter letter='r' />
					<span>&nbsp;</span>
					<LogoLetter letter='g' />
					<LogoLetter letter='u' />
					<LogoLetter letter='a' />
					<LogoLetter letter='n' />
				</a>
			</h1>
			<h1 className='flex flex-col items-center text-4xl font-bold md:items-start md:text-6xl'>
				<span>Victor is a</span>
				<span className='animate-title-part1'>developer</span>
				<span className='animate-title-part2'>gym lovers</span>
				<span className='animate-title-part3'>Sports lover</span>
			</h1>
			<div className='flex min-h-screen min-w-full flex-col justify-center bg-[#fafdfe]'>
				<Image
					src='/assests/404.svg'
					width='800'
					height='400'
					alt='404 illustration'
				/>

				<div className='flex w-full flex-col items-center justify-center'>
					<p className='font-jost text-2xl font-bold text-gray-800 sm:text-3xl'>
						Whoops! Lost in Space?
					</p>
					<p className='text-md font-sen text-center font-medium text-gray-700 sm:text-lg'>
						The page you&apos;re looking for isn&apos;t found :( <br />
						We suggest you back to home
					</p>

					<button
						className='text-md font-jost mt-4 rounded-md bg-purple-600 px-4 py-2 font-medium text-white duration-100 hover:bg-purple-500 hover:text-gray-100 sm:px-6 sm:py-3 sm:text-lg'
						onClick={() => router.push('/')}
					>
						Back to Home
					</button>
				</div>
			</div>
		</>
	)
}

export default demoAnimation
