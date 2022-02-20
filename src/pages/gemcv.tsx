import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import me from '../../public/me_face-only.png'
import UnicodeStarRating from '@/components/StarRatings/UnicodeStarRating'
import TimeLineVerticalAlternating from '@/components/Timelines/TimeLineVerticalAlternating'
import { GetStaticProps } from 'next'
import { getPostItems } from '@/utils/GemMdxUtils'
import { ICvTmeline } from '@/types/ICvTmeline'

type technology = {
	name: string
	numberOfStars: number
}

type myCVData = {
	slug: string
	content: string
	gemindex: string
	birthdate: string
	title: string
	image: string
	technologies: technology[]
	timelines: ICvTmeline[]
	others: string[]
}

type Props = {
	cvData: myCVData
}

// const Index: React.FC<Props> = ({ posts }: Props) => {
const gemcv: React.FC<Props> = ({ cvData }: Props) => {
	// To calculate the time between 2 Dates in typescript
	const age = Math.floor(
		(new Date().getTime() - new Date(cvData.birthdate).getTime()) / 3.15576e10
	)
	// const imgSrc = require(`../../public/${cvData.image}`)

	return (
		<>
			<Head>
				<title>cvData.title&apos; Portfolio - CV</title>
			</Head>
			<section id='cv' className='dark:bg-lightgrey text-text'>
				<div className='container mx-auto grid grid-cols-1 py-12 sm:grid-cols-3 sm:gap-16'>
					<div className='col-span-1 mx-6 sm:mx-0'>
						<div className='text-center'>
							<Image
								className='rounded-full'
								priority
								alt='Profile picture'
								width={300}
								height={300}
								// src={imgSrc}
								src={me}
								// placeholder='blur'
							/>
							<p>Hello, is it me you&apos;re looking for?</p>
							<p>{cvData.content}</p>
						</div>
					</div>
					<div className='col-span-1 mx-6 mt-6 flex flex-col justify-center sm:col-span-2 sm:mx-0 sm:mt-0'>
						<h1 className='mb-4 text-2xl font-bold md:text-4xl'>
							A bit about me
						</h1>
						<div>
							<p>
								Hi, I&apos;m {cvData.title}. I&apos;m {age} years old, living in
								Vancouver. I&apos;m a professional Frontend Developer, currently
								working at{' '}
								<a
									target='_blank'
									rel='noopener noreferrer'
									className='shadow-link hover:shadow-link-hover dark:shadow-link-dark dark:hover:shadow-link-dark-hover cursor-pointer transition-shadow'
									href='https://www.Samsung.ca'
								>
									The Samsung
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
						{cvData.technologies.map((technology, i) => (
							<div key={i} className='mb-4 flex justify-between'>
								<div>{technology.name}</div>
								<div className='flex'>
									<UnicodeStarRating
										ratingOfStars={technology.numberOfStars}
									></UnicodeStarRating>
								</div>
							</div>
						))}
					</div>

					<div className='col-span-1 mx-6 mt-6 sm:col-span-2 sm:mx-0 sm:mt-0'>
						<h2 className='mb-4 text-xl font-bold lg:text-2xl'>My timeline</h2>
						<div className='timeline-container relative flex w-full flex-col after:absolute after:h-full after:w-1 after:bg-lime-700 dark:after:bg-dark'>
							{cvData.timelines.map((timeline, i) => (
								<TimeLineVerticalAlternating
									key={i}
									index={i}
									data={timeline}
									// child  data={...timeline}
								></TimeLineVerticalAlternating>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default gemcv

// get "cv.mdx" file data
export const getStaticProps: GetStaticProps = async () => {
	const cvData = getPostItems('gemcv.mdx', [
		'slug',
		'content',
		'gemindex',
		'birthdate',
		'title',
		'image',
		'technologies',
		'timelines',
	])

	return { props: { cvData } }
}
