import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import { useRouter } from 'next/router'
// import Phone from './phone'
// import Email from './email'
// import SocialIcons from './socialIcons'
// import Hamburger from './hamburger'
import { LinksAttributes } from '@/types/IPageMdStructure'

type Props = { links: LinksAttributes[] }

export default function Navigation({ links }: Props) {
	const { asPath } = useRouter()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	// eslint-disable-next-line no-unused-vars
	const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
	const menuStyles = mobileMenuOpen ? 'flex' : 'hidden'
	// console.log('Navigation===>')
	// console.log(Object.values(links).filter(({ navigation }) => navigation))

	// const navLinks = links.filter(({ navigation }) => navigation)
	const navLinks = Object.values(links).filter(({ navigation }) => navigation)
	return (
		<>
			{/* <Hamburger toggleMenu={toggleMenu} /> */}
			<nav
				className={`${menuStyles} font-open-sans text-gray-333 fixed inset-0 flex h-full flex-col justify-between bg-fuchsia-100 py-20 text-lg sm:relative sm:inset-auto sm:mr-8 sm:flex sm:flex-row sm:py-0 sm:text-sm`}
			>
				<div className='flex flex-col sm:flex-row'>
					{navLinks.map(({ title, href }) => {
						const active = asPath === href ? 'sm:active-link' : ''
						return (
							// <Link href={`/${yourPath}`} ></Link>
							// <Link href={{ pathname: `/{href}` }} as={`/${href}`} key={href}>
							// <Link href={`/${href}`} key={href} prefetch={false} passHref>
							// old version: <Link href={{pathname: '/', hash: 'personal'}}>
							<Link href={`/${href}`} key={href} prefetch={false} passHref>
								<a
									className={`${active} hover:border-theme-green flex items-center justify-center border-white px-4 py-4 text-center transition-colors duration-100 ease-linear sm:h-full sm:border-b-4 sm:py-0`}
								>
									{title}
								</a>
							</Link>
						)
					})}
				</div>
				<div className='flex flex-col items-center text-center text-sm sm:hidden'>
					{/* <Phone />
					<Email />
					<SocialIcons /> */}
				</div>
			</nav>
		</>
	)
}
