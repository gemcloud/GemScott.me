import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import { LinksAttributes } from '@/types/IPageMdStructure'
// import SocialBar from './socialBar'
// import Contact from './contact'
// import Footer from './footer'

type Props = {
	children?: ReactNode
	pageTitle: string
	links: LinksAttributes[]
}

export default function Layout({ children, pageTitle, links }: Props) {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* <SocialBar /> */}
			<Header links={links} />
			<Breadcrumb>{pageTitle}</Breadcrumb>
			<Container>
				<main className='sm:mx-2 md:mx-8 my-4 sm:my-12 font-open-sans text-gray-76 sm:text-sm leading-relaxed w-screen'>
					{children}
				</main>
			</Container>
			<div className='flex flex-col flex-1 justify-end'>
				{/* <Contact />
				<Footer links={links} /> */}
				<footer className='bg-fuchsia-100 mt-8 py-4'>
					<div className='container mx-auto flex justify-center'>
						&copy; 2022 Gem Cloud
					</div>
				</footer>
			</div>
		</div>
	)
}
