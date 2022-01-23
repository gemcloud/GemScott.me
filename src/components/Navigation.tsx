import React from 'react'
// import { useState } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import Phone from './phone'
// import Email from './email'
// import SocialIcons from './socialIcons'
// import Hamburger from './hamburger'
import { LinksAttributes } from '@/types/IPageMdStructure'

type Props = { links: LinksAttributes[] }

export default function Navigation({ links }: Props) {
	// const { asPath } = useRouter()
	// const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	// const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
	// const menuStyles = mobileMenuOpen ? 'flex' : 'hidden'
	console.log('Navigation===>')

	// console.log(Object.values(links).filter(({ navigation }) => navigation))

	// const navLinks = links.filter(({ navigation }) => navigation)
	const navLinks = Object.values(links).filter(({ navigation }) => navigation)
	return (
		<>
			{/* <Hamburger toggleMenu={toggleMenu} /> */}
			<nav
			// className={`${menuStyles} sm:flex fixed sm:relative sm:mr-8 py-20 sm:py-0 font-open-sans h-full flex flex-col sm:flex-row justify-between text-gray-333 text-lg sm:text-sm bg-white inset-0 sm:inset-auto`}
			>
				<div className='flex flex-col sm:flex-row'>
					{navLinks.map(({ title, href }) => {
						// const active = asPath === href ? 'sm:active-link' : ''
						return (
							// <h3 key={href}>
							// 	{title} <span>{href}</span>
							// </h3>
							// <Link href={`/${yourPath}`} ></Link>
							// <Link href={href} key={href} prefetch={false}>
							<Link href={href} key={href} prefetch={false}>
								<a
								// className={`${active} px-4 py-4 sm:py-0 sm:h-full flex justify-center items-center sm:border-b-4 border-white hover:border-theme-green transition-colors ease-linear duration-100 text-center`}
								>
									{title}
								</a>
							</Link>
						)
					})}
				</div>
				<div className='flex sm:hidden flex-col text-center text-sm items-center'>
					{/* <Phone />
					<Email />
					<SocialIcons /> */}
				</div>
			</nav>
		</>
	)
}
