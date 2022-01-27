import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import { LinksAttributes } from '@/types/IPageMdStructure'
// import SocialBar from './socialBar'
// import Contact from './contact'
import { FooterGem } from '@/components/Footers/FooterGem'

type Props = {
	children?: ReactNode
	pageTitle: string
	links: LinksAttributes[]
}

export default function Layout({ children, pageTitle, links }: Props) {
	return (
		<div className='flex min-h-screen flex-col'>
			{/* <SocialBar /> */}
			<Header links={links} />
			<Breadcrumb>{pageTitle}</Breadcrumb>
			<Container>
				<main className='font-open-sans text-gray-76 my-4 w-screen leading-relaxed sm:mx-2 sm:my-12 sm:text-sm md:mx-8'>
					{children}
				</main>
			</Container>
			<div className='flex flex-1 flex-col justify-end'>
				{/* <Contact />
				<Footer links={links} /> */}
				<FooterGem />
			</div>
		</div>
	)
}
