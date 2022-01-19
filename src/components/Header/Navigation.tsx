import React from 'react'
import { useState } from 'react'
// import Link from 'next/link'
import Hamburger from './Hamburger'

function Navigation(links: any) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
	const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)
	const menuStyles = mobileMenuOpen ? 'active' : 'hidden'

	return (
		<>
			<nav className='navbar'>
				<a href='#' className='nav-logo'>
					Home Logo
				</a>
				<ul className={`nav-menu ${menuStyles}`}>
					<li className='nav-item'>
						<a
							href='#'
							className='nav-link'
							onClick={() =>
								setMobileMenuOpen(mobileMenuOpen ? !mobileMenuOpen : false)
							}
						>
							Services
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='#'
							className='nav-link'
							onClick={() =>
								setMobileMenuOpen(mobileMenuOpen ? !mobileMenuOpen : false)
							}
						>
							Blog
						</a>
					</li>
					<li className='nav-item'>
						<a href='#' className='nav-link'>
							About
						</a>
					</li>
					<li className='nav-item'>
						<a href='#' className='nav-link'>
							Contact
						</a>
					</li>
				</ul>
				{/* <Hamburger handleClick={() => toggleMenu()} /> */}
				<Hamburger
					buttonToggleOpened={mobileMenuOpen}
					clickHandler={() => toggleMenu()}
				/>
			</nav>
		</>
	)
}

export default Navigation

//   {
// 				navLinks.map(({ title, href }) => {
// 					const active = asPath === href ? 'sm:active-link' : ''
// 					return (
// 						<Link href={href} key={href}>
// 							<a
// 								className={`${active} px-4 py-4 sm:py-0 sm:h-full flex justify-center items-center sm:border-b-4 border-white hover:border-theme-green transition-colors ease-linear duration-100 text-center`}
// 							>
// 								{title}
// 							</a>
// 						</Link>
// 					)
// 				})
// 			}
