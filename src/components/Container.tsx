/** How to pass children
 * children:
 * @return {JSX.Element} The JSX Code for the main content.
 */

import React, { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Container({ children }: Props) {
	return (
		<div className='flex w-screen justify-center'>
			<div className='xl:w-xl flex w-full px-4'>{children}</div>
		</div>
	)
}
