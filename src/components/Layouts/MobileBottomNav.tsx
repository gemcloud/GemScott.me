import { useRouter } from 'next/router'
import React from 'react'

import UnstyledLink from '../links/UnstyledLink'

import { menuList } from '@/constants/MenuList'
import clsxm from '@/libs/helpers/clsxm'

const MobileBottomNav = () => {
	const router = useRouter()
	return (
		<div
			className={clsxm(
				'fixed bottom-0.5 left-1/2 flex w-full -translate-x-1/2 items-center justify-around',
				'bg-charcoal-300 shadow-lightsteel-600 dark:shadow-lightsteel-100 rounded-lg py-2 opacity-90 shadow-sm',
				'dark:bg-errieblack-400 backdrop-blur-sm sm:hidden'
			)}
		>
			{menuList.map((menu, index) => (
				<UnstyledLink
					key={index}
					href={menu.route}
					className={clsxm(
						'flex flex-col items-center justify-center',
						'hover:border-primary-200 hover:rounded-md hover:border',
						'focus:border-none'
					)}
				>
					<div
						className={clsxm(
							router.pathname === menu.route &&
								'bg-primary-400 dark:bg-primary-600  rounded-full',
							'px-3 py-1'
						)}
					>
						<menu.icon size={28} />
					</div>
					<h5 className='font-primary'>{menu.menu_name}</h5>
				</UnstyledLink>
			))}
		</div>
	)
}

export default MobileBottomNav
