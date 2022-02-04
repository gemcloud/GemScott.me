import React, { ReactNode } from 'react'
import Link from 'next/link'
import { FooterGem } from '@/components/Footers/FooterGem'

type Props = {
	children?: ReactNode
}

export default function BlogLayout({ children }: Props) {
	return (
		<div className='flex min-h-screen flex-col'>
			<header className='mb-8 bg-fuchsia-100 py-4'>
				<div className='container mx-auto flex justify-center'>
					<Link href='/'>
						<a>🏡</a>
					</Link>
					<span className='mx-auto'>Welcome to my blog</span>{' '}
				</div>
			</header>
			<main className='container mx-auto flex-1'>{children}</main>

			<FooterGem></FooterGem>
		</div>
	)
}
