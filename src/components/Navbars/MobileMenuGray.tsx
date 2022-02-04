import React from 'react'
import { LinksAttributes } from '@/types/IPageMdStructure'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface MyProps {
	lbuttonToggleOpened?: boolean
	links: LinksAttributes[]
}

const MobileMenuGray = (param: MyProps) => {
	const { asPath } = useRouter()
	const navLinks = Object.values(param.links).filter(
		({ navigation }) => navigation
	)

	return (
		<nav className='fixed mt-8 h-full'>
			{navLinks.map(({ title, href }) => {
				const active = asPath === href ? 'sm:active-link' : ''
				return (
					<div className='px-12 py-4' key={href}>
						<Link href={`/${href}`} prefetch={false} passHref>
							<a className={`${active} transition-colors hover:text-sky-500`}>
								{title}
							</a>
						</Link>
					</div>
				)
			})}
		</nav>
	)
}

export default MobileMenuGray
