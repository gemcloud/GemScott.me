import React from 'react'
import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'

// interface MyProps {
//   buttonToggleOpened?: boolean;
//   //   clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// const Search = (param: MyProps) => {
const Search = () => {
	const searchRef = useRef(null)
	const [query, setQuery] = useState('')
	const [active, setActive] = useState(false)
	const [results, setResults] = useState([])

	const searchEndpoint = query => `/api/search?q=${query}`

	const onChange = useCallback(event => {
		const query = event.target.value
		setQuery(query)
		if (query.length) {
			fetch(searchEndpoint(query))
				.then(res => res.json())
				.then(res => {
					setResults(res.results)
				})
		} else {
			setResults([])
		}
	}, [])

	const onFocus = useCallback(() => {
		setActive(true)
		window.addEventListener('click', onClick)
	}, [])

	const onClick = useCallback(event => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false)
			window.removeEventListener('click', onClick)
		}
	}, [])

	return (
		<>
			<div>
				<div className='relative mx-auto pt-2 text-gray-600'>
					<input
						onChange={onChange}
						onFocus={onFocus}
						className='h-10 rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none'
						placeholder='Search posts'
						type='search'
						name='search'
						value={query}
					/>
					<button type='submit' className='right-0 top-0 absolute mt-5 mr-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							stroke='currentColor'
							className='h-4 w-4 fill-current text-gray-600'
							version='1.1'
							id='Capa_1'
							x='0px'
							y='0px'
							viewBox='0 0 56.966 56.966'
							width='512px'
							height='512px'
						>
							<path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
						</svg>
					</button>
				</div>
				{/* result */}
				{active && results.length > 0 && (
					<ul className={styles.results}>
						{results.map(({ id, title }) => (
							<li className={styles.result} key={id}>
								<Link href='/posts/[id]' as={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}

export default Search
