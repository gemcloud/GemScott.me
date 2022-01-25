import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
	children?: ReactNode
}

export default function BlogLayout({ children }: Props) {
	return (
		<div className='flex flex-col min-h-screen'>
			<header className='bg-fuchsia-100 mb-8 py-4'>
				<div className='container mx-auto flex justify-center'>
					<Link href='/'>
						<a>🏡</a>
					</Link>
					<span className='mx-auto'>Welcome to my blog</span>{' '}
				</div>
			</header>
			<main className='container mx-auto flex-1'>{children}</main>
			<footer className='bg-fuchsia-100 mt-8 py-4'>
				<div className='container mx-auto flex justify-center'>
					&copy; 2022 Gem Cloud
				</div>
			</footer>
		</div>
	)
}