import React, { ReactNode } from 'react'
import Container from '@/components/Container'

type Props = { children: ReactNode }

export default function Breadcrumb({ children }: Props) {
	return (
		<div className='bg-theme-green flex w-screen items-center py-3'>
			<Container>
				<h2 className='font-lato text-3xl font-light text-orange-400 sm:ml-8'>
					{children}
				</h2>
			</Container>
		</div>
	)
}
