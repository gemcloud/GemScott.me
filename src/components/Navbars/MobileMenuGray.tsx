import React from 'react'
import { LinksAttributes } from '@/types/IPageMdStructure'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './MobileNavLinks.module.scss'

interface MyProps {
	TogglMenuOpened: boolean
	clickHandler: (event: React.MouseEvent<HTMLAnchorElement>) => void
	links: LinksAttributes[]
}

const MobileMenuGray = (param: MyProps) => {
	const { asPath } = useRouter()
	const navLinks = Object.values(param.links).filter(
		({ navigation }) => navigation
	)

	const menuToggle = param.TogglMenuOpened
		? 'translate-x-0' // : open menu
		: 'translate-x-full' // close menu

	// const linkClicked = (event: any) => {
	// 	console.log('I clicked on the = ' + param.TogglMenuOpened)
	// 	param.TogglMenuOpened = !param.TogglMenuOpened
	// 	// param.TogglMenuOpened = false
	// 	// if (event.currentTarget.href.indexOf('cv') > -1) {
	// 	// 	document.querySelectorAll('nav li a').forEach(navEl => {
	// 	// 		navEl.classList.remove('active')
	// 	// 	})
	// 	// }
	// 	// if (width <= 768) {
	// 	// 	toggleMobileNavigation()
	// 	// }
	// }

	// const handleClick = (e: any, path: any) => {
	// 	param.TogglMenuOpened = false
	// 	// if (path === '/about') {
	// 	// 	console.log('I clicked on the About Page')
	// 	// }
	// 	// if (path === '/posts') {
	// 	// 	console.log('I clicked on the Posts Page')
	// 	// }
	// }

	return (
		<nav
			arai-label='mobile navigation'
			className={`${menuToggle}  dark:bg-gray-800mt-8  top-24 right-0 fixed fixed z-10 h-full h-full w-full transform overflow-y-auto bg-gray-200 opacity-95 duration-300 ease-in-out `}
		>
			{navLinks.map(({ title, href }) => {
				const active =
					asPath === '/' + href + '/' || (asPath === '/' && href === '')
						? `${styles.active}`
						: ''
				return (
					<div className='px-12 py-4' key={href}>
						<Link href={`/${href}`} prefetch={false} passHref>
							<a
								className={`${styles['mobile-link']}  ${active} transition-colors hover:text-sky-500`}
								// onClick={e => handleClick(e, '/about')}
								// onClick={linkClicked}
								onClick={param.clickHandler}
							>
								{title}
							</a>
						</Link>
					</div>
				)
			})}
			<div className='flex flex-col items-center text-center text-sm sm:hidden'>
				<span> Mobile menu footer</span>
				{/* <Phone />
				<Email />
				<SocialIcons /> */}
			</div>
		</nav>
	)
}

export default MobileMenuGray
