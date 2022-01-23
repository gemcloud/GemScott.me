import React, { ReactNode } from 'react'
import Container from '@/components/Container'

type Props = { children: ReactNode }

export default function Breadcrumb({ children }: Props) {
	return (
		<div className='flex items-center w-screen bg-theme-green py-3'>
			<Container>
				<h2 className='text-3xl text-white sm:ml-8 font-light font-lato'>
					{children}
				</h2>
			</Container>
		</div>
	)
}
