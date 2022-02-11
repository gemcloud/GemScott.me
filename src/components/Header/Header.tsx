import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitch from '@/components/Header/ThemeSwitch'
import Hamburger from '@/components/Hamburgers/HambAnimation'
import PrimaryNavbar from '@/components/Navbars/PrimaryNavbar'
import { LinksAttributes } from '@/types/IPageMdStructure'
import MobileMenuGray from '../Navbars/MobileMenuGray'

type Props = { links: LinksAttributes[] }

export default function Header({ links }: Props) {
	const imgLogo = require('../../../public/images/tigers/tiger-Icon-real.png')

	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
	const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

	const LogoLetter = ({ letter }: any) => (
		<span className='letter relative top-0 inline-block'>{letter}</span>
	)
	return (
		<header>
			<div className='shadow-lg sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6'>
				<div className='container mx-auto flex items-center justify-between px-4 lg:max-w-4xl'>
					{/* logo + Name */}
					<div>
						<Link href='/'>
							<a className='logo flex flex-row text-lg lg:text-2xl'>
								<Image
									src={imgLogo}
									alt='Logo'
									className='mr-2 h-8 w-8'
									width={30}
									height={30}
								/>
								<span>&nbsp;</span>
								<span className='text-lg font-semibold text-gray-500'>
									<LogoLetter letter='s' />
									<LogoLetter letter='c' />
									<LogoLetter letter='o' />
									<LogoLetter letter='t' />
									<LogoLetter letter='t' />
									<span>&nbsp;</span>
									<LogoLetter letter='t' />
									<LogoLetter letter='i' />
									<LogoLetter letter='g' />
									<LogoLetter letter='e' />
									<LogoLetter letter='r' />
								</span>
							</a>
							{/* <a
								href='#'
								className='font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
							>
								<Image
									src={imgLogo}
									alt='Logo'
									className='mr-2 h-8 w-8'
									width={30}
									height={30}
								/>
								<span className='text-lg font-semibold text-gray-500'>
									Scott Tiger
								</span>
							</a> */}
						</Link>
					</div>
					{/* Menu = navbar + dark + humbger */}
					<div className='flex items-center'>
						<div className='hidden space-x-4 font-medium text-gray-800 dark:text-white sm:block md:flex lg:flex'>
							{/* Primary Navbar items */}
							<PrimaryNavbar links={links} />
						</div>
						{/* dark | light */}
						<ThemeSwitch />
						<div className='item-center flex sm:hidden'>
							{/* Hamburger button */}
							<Hamburger
								buttonToggleOpened={mobileMenuOpen}
								clickHandler={() => toggleMenu()}
							/>
							{/* Mobile Menu */}
							<MobileMenuGray
								TogglMenuOpened={mobileMenuOpen}
								clickHandler={() => toggleMenu()}
								links={links}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
