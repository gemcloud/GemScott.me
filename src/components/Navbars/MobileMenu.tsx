import React from 'react'

interface MyProps {
	buttonToggleOpened?: boolean
	//   clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MobileMenu = (param: MyProps) => {
	return (
		<>
			<div className='mobile-menu hidden'>
				<ul className=''>
					<li className='active'>
						<a
							href='index.html'
							className='block bg-green-300 px-2 py-4 text-sm font-semibold text-white'
						>
							Home
						</a>
					</li>
					<li>
						<a
							href='#services'
							className='block px-2 py-4 text-sm transition duration-300 hover:bg-green-300'
						>
							Services
						</a>
					</li>
					<li>
						<a
							href='#about'
							className='block px-2 py-4 text-sm transition duration-300 hover:bg-green-300'
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#contact'
							className='block px-2 py-4 text-sm transition duration-300 hover:bg-green-300'
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default MobileMenu
