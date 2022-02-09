import React from 'react'
import Link from 'next/link'
import { LinksAttributes } from '@/types/IPageMdStructure'
import styles from './MobileNavLinks.module.scss'

interface MyProps {
	buttonToggleOpened: boolean
	clickHandler: (event: React.MouseEvent<HTMLAnchorElement>) => void
	links: LinksAttributes[]
}

// const MobileNavLinks = ({ open }) => {
const MobileNavLinks = (param: MyProps) => {
	// const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
	// 	open: open,
	// })
	const displayMobileNavLinks = param.buttonToggleOpened ? `${styles.open}` : ''

	const active = `${styles.active}`

	return (
		<nav
			arai-label='mobile navigation'
			className={`${styles['mobile-nav-wrapper']} ${displayMobileNavLinks}`}
		>
			<Link href={`/about`} prefetch={false} passHref>
				<a
					className={`${styles['mobile-link']} ${active} transition-colors hover:text-sky-500`}
				></a>
				Blog
			</Link>
			{/* <Link className='mobile-link' activeClassName='active' to='/courses'>
				Courses
			</Link> */}
			{/* <Link className='mobile-link' activeClassName='active' to='/media'>
				Media
			</Link>
			<Link className='mobile-link' activeClassName='active' to='/about'>
				About
			</Link>
			<Link className='mobile-link' activeClassName='active' to='/contact'>
				Contact
			</Link> */}
		</nav>
	)
}

export default MobileNavLinks
