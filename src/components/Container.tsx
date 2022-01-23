/** How to pass children
 * children:
 * @return {JSX.Element} The JSX Code for the main content.
 */

import React, { ReactNode } from 'react'

type Props = { children: ReactNode }

export default function Container({ children }: Props) {
	return (
		<div className='w-screen flex justify-center'>
			<div className='flex px-4 w-full xl:w-xl'>{children}</div>
		</div>
	)
}
