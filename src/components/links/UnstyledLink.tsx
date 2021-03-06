import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import React from 'react'

export type UnstyledLinkProps = {
	href: string
	children: React.ReactNode
	openNewTab?: boolean
	className?: string
	nextLinkProps?: Omit<LinkProps, 'href'>
} & React.ComponentPropsWithRef<'a'>

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
	// eslint-disable-next-line react/prop-types
	({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
		const isNewTab =
			openNewTab !== undefined
				? openNewTab
				: // eslint-disable-next-line react/prop-types
				  href && !href.startsWith('/') && !href.startsWith('#')
		if (isNewTab) {
			return (
				<a
					ref={ref}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className={clsx('cursor-newtab', className)}
					{...rest}
				>
					{children}
				</a>
			)
		}
		return (
			<Link href={href} {...nextLinkProps} {...rest}>
				<a ref={ref} className={className}>
					{children}
				</a>
			</Link>
		)
	}
)

UnstyledLink.displayName = 'UnstyledLink'

export default UnstyledLink
