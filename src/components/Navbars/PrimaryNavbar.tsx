import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { LinksAttributes } from '@/types/IPageMdStructure'

type Props = {
	lbuttonToggleOpened?: boolean
	links: LinksAttributes[]
}

const PrimaryNavbar = (param: Props) => {
	const { asPath } = useRouter()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	// eslint-disable-next-line no-unused-vars
	const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
	const menuStyles = mobileMenuOpen ? 'flex' : 'hidden'
	const navLinks = Object.values(param.links).filter(
		({ navigation }) => navigation
	)

	return (
		<>
			<nav className={`${menuStyles} hidden items-center space-x-1 md:flex`}>
				{navLinks.map(({ title, href }) => {
					const active =
						asPath === href ? 'sm:active-link border-b-4 border-green-300' : ''

					return (
						<Link href={`/${href}`} key={href} prefetch={false} passHref>
							<a
								className={`${active} py-4 px-2 font-semibold text-gray-500 transition duration-300 hover:text-green-300`}
							>
								{title}
							</a>
						</Link>
					)
				})}
			</nav>
		</>
	)
}

export default PrimaryNavbar
