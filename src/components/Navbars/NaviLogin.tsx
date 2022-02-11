import React from 'react'
import Image from 'next/image'
import ThemeSwitch from '@/components/Header/ThemeSwitch'
// import PrimaryNavbar from "@/components/Navbars/PrimaryNavbar";
import SecondNavbar from '@/components/Navbars/SecondNavbar'
import MobileMenu from '@/components/Navbars/MobileMenu'
// import SearchNavbar from "@/components/Navbars/SearchNavbar";

import Search from '@/components/Navbars/Search'

const NaviLogin = () => {
	const imgLogo = require('../../../public/images/apple-touch-icon.png')

	return (
		// <div className="sticky top-0 z-20 bg-white shadow-lg py-2 dark:bg-black md:mb-6 md:py-6"></div>
		<div className='shadow-lg sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6'>
			{/* // <nav className="sticky bg-white py-2 shadow-lg dark:bg-black "> */}
			<div className='mx-auto max-w-6xl px-4'>
				<div className='flex justify-between'>
					<div className='flex space-x-7'>
						{/* <!-- Website Logo --> */}
						<div>
							<a href='#' className='flex items-center py-4 px-2'>
								<Image
									src={imgLogo}
									alt='Logo'
									className='mr-2 h-8 w-8'
									width={30}
									height={30}
								/>
								<span className='text-lg font-semibold text-gray-500'>
									Navigation
								</span>
							</a>
						</div>
						{/* <!-- Primary Navbar items --> */}
						{/* <PrimaryNavbar links={} /> */}
					</div>
					{/* <!-- Secondary Navbar items --> */}
					<SecondNavbar />
					{/* <!-- Hamburgers --> */}
					<ThemeSwitch />
					<Search />
					<div className='flex items-center md:hidden'>
						<button className='mobile-menu-button outline-none'>
							<svg
								className='h-6 w-6 text-gray-500'
								x-show='!showMenu'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path d='M4 6h16M4 12h16M4 18h16'></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/* <!-- mobile menu --> */}
			<MobileMenu />
		</div>
	)
}

export default NaviLogin
