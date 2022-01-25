import React, { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
	children: ReactNode
	href: string
}

export default function CustomLink({ children, href }: Props) {
	return href.startsWith('/') || href === '' ? (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	) : (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			{children}
		</a>
	)
}

// import PropTypes from 'prop-types'
// CustomLink.propTypes = {
// 	children: PropTypes.node.isRequired,  ==> //PropTypes.node.isRequired
// 	href: PropTypes.string.isRequired,
// }
