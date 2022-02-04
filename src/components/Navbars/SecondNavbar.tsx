import React from 'react'

interface MyProps {
	buttonToggleOpened?: boolean
	//   clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SecondNavbar = (param: MyProps) => {
	return (
		<>
			<div className='hidden items-center space-x-3 md:flex'>
				<a
					href=''
					className='rounded py-2 px-2 font-medium text-gray-500 transition duration-300 hover:bg-green-300 hover:text-white'
				>
					Log In
				</a>
				<a
					href=''
					className='rounded bg-green-300 py-2 px-2 font-medium text-white transition duration-300 hover:bg-green-300'
				>
					Sign Up
				</a>
			</div>
		</>
	)
}

export default SecondNavbar
