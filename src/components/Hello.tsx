import React from 'react'

export const Hello = () => {
	return (
		<>
			<div>Hello world from Gem Cloud!</div>
		</>
	)
}

// Hoisting : https://dev.to/ugglr/react-functional-components-const-vs-function-2kj9
// const MyComponent = () => {}
// export default MyComponent

// export default function MyComponent() {}

// export default Hello

// export default function Hamburger({ onClick }: { onClick: any }) {
// 	const hamburger = []
// 	for (let i = 0; i < 3; i += 1) {
// 		hamburger.push(
// 			<span key={`hamburger-${i}`} className='bg-pink-custom w-8 h-1 my-1' />
// 		)
// 	}

// 	return (
// 		<div
// 			onClick={onClick}
// 			role='button'
// 			tabIndex={0}
// 			className='fixed md:hidden z-50 h-14 w-14 top-0 right-0 m-4 bg-opacity-nav bg-white flex flex-col justify-center items-center outline-none'
// 		>
// 			{hamburger}
// 		</div>
// 	)
// }
