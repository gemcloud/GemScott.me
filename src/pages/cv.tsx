import React, { useEffect } from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import the icons you need
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons'
import TimelineItem from '@/components/Timelines/TimelineItem'
import me from '../../public/me_face-only.png'

// import the icons you need
// import {
// 	faSearch,
// 	faAmbulance,
// 	faAnchor,
// } from '@fortawesome/free-solid-svg-icons'

const CV = () => {
	// To calculate the time between 2 Dates in typescript
	const age = Math.floor(
		(new Date().getTime() - new Date('1999-09-09').getTime()) / 3.15576e10
	)

	const technologies = [
		{ name: 'React', numberOfStars: 4 },
		{ name: 'Vue.js', numberOfStars: 2 },
		{ name: 'Angular', numberOfStars: 2 },
		{ name: 'Gatsby.js', numberOfStars: 3 },
		{ name: 'Next.js', numberOfStars: 4 },
		{ name: 'React Native', numberOfStars: 3 },
		{ name: 'Swift', numberOfStars: 2 },
		{ name: 'Wordpress', numberOfStars: 3 },
		{ name: 'ES6', numberOfStars: 4 },
		{ name: 'HTML', numberOfStars: 5 },
		{ name: 'CSS', numberOfStars: 4 },
	]
	const renderStars = (amount: number) =>
		// eslint-disable-next-line prefer-spread
		Array.apply(null, [1, 2, 3, 4, 5]).map((_, i) => (
			<span className='star text-blue-900' key={i}>
				<FontAwesomeIcon
					className={`h-6 w-6 fill-current text-blue-900 ${
						i < amount ? 'full' : ''
					}`}
					icon={i < amount ? faStarFull : faStarEmpty}
				/>
			</span>
		))
	useEffect(() => {
		AOS.init({
			duration: 1000,
		})
	}, [])

	return (
		<>
			<Head>
				<title>Scott Tiger&apos; Portfolio - CV</title>
			</Head>
			<section id='cv' className='dark:bg-lightgrey text-text'>
				<div className='container mx-auto grid grid-cols-1 py-12 sm:grid-cols-3 sm:gap-16'>
					<div className='col-span-1 mx-6 sm:mx-0'>
						<div className='text-center'>
							<Image
								className='rounded-full'
								priority
								alt='Profile picture'
								src={me}
								placeholder='blur'
							/>
							<p>Hello, is it me you&apos;re looking for?</p>
						</div>
					</div>
					<div className='col-span-1 mx-6 mt-6 flex flex-col justify-center sm:col-span-2 sm:mx-0 sm:mt-0'>
						<h1 className='mb-4 text-2xl font-bold md:text-4xl'>
							A bit about me
						</h1>
						<div>
							<p>
								Hi, I&apos;m Thomas. I&apos;m {age} years old, living in
								Vancouver. I&apos;m a professional Frontend Developer, currently
								working at{' '}
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
									href='https://www.the-reference.be'
								>
									The Reference
								</a>
								.
							</p>
							<p>
								What I like most about Frontend development is the ever-changing
								technology. New frameworks being released daily (one better than
								the other...), constant improvements to existing frameworks,
								yearly new features in ECMAScript..
							</p>
							<p>
								I&apos;m always eager to discover the latest updates, apps,
								technologies..!
							</p>
						</div>
					</div>
					<div className='col-span-1 mx-6 mt-6 sm:mx-0 sm:mt-0'>
						<h2 className='mb-4 text-xl font-bold lg:text-2xl'>Technologies</h2>
						{technologies.map((technology, i) => (
							<div key={i} className='mb-4 flex justify-between'>
								<div>{technology.name}</div>
								<div className='flex'>
									{renderStars(technology.numberOfStars)}
								</div>
							</div>
						))}
					</div>
					<div className='col-span-1 mx-6 mt-6 sm:col-span-2 sm:mx-0 sm:mt-0'>
						<h2 className='mb-4 text-xl font-bold lg:text-2xl'>My timeline</h2>
						<div className='timeline-container relative flex w-full flex-col after:absolute after:h-full after:w-1 after:bg-lime-700 dark:after:bg-dark'>
							<TimelineItem index={0} url='https://reference.be'>
								<time className='text-grey text-xs'>October 2018 - now</time>
								<p>
									Frontend Developer at{' '}
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
										href='https://reference.be'
									>
										The Reference
									</a>
									, Ghent
								</p>
							</TimelineItem>
							<TimelineItem index={1} url='https://happsdevelopment.com'>
								<time className='text-grey text-xs'>
									September 2017 - October 2018
								</time>
								<p>
									Full Stack Developer at{' '}
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
										href='https://happsdevelopment.com'
									>
										Happs Development
									</a>
									, Ghent
								</p>
							</TimelineItem>
							<TimelineItem index={2} url='https://getrialto.com'>
								<time className='text-grey text-xs'>
									February 2017 - June 2017
								</time>
								<p>
									Internship as Swift Developer at{' '}
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
										href='https://getrialto.com'
									>
										Rialto
									</a>
									, Ghent
								</p>
							</TimelineItem>
							<TimelineItem index={3} url='https://hogent.be'>
								<time className='text-grey text-xs'>
									September 2014 - June 2017
								</time>
								<p>
									Bachelor Applied Computer Sciences at{' '}
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
										href='https://hogent.be'
									>
										Hogeschool Gent
									</a>
								</p>
							</TimelineItem>
							<TimelineItem index={4} url='https://telenet.be'>
								<time className='text-grey text-xs'>
									May 2012 - August 2014
								</time>
								<p>
									Support Engineer at{' '}
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
										href='https://telenet.be'
									>
										Telenet
									</a>
									, Lochristi
								</p>
							</TimelineItem>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default CV
