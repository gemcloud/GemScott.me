import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { Header } from '@/components/Header/Header'

type Props = {
	content: { attributes: HomeAttributes }
}

interface HomeAttributes {
	hero_title: string
	hero_description: string
	hero_image: string
}

const PageTemplate: NextPage<Props> = ({ content }: Props) => {
	const { attributes } = content
	return (
		<>
			<Header></Header>
			<h1>{attributes.hero_title}</h1>
			<p>{attributes.hero_description}</p>
			<img src={attributes.hero_image} alt='hero image' />
		</>
	)
}

// get data for current page
export const getStaticProps: GetStaticProps = async () => {
	const content = await import(`./../../_pages/${'home'}.md`)
	return { props: { content: content.default } }
}

export default PageTemplate // export me!

// import dynamic from 'next/dynamic'

// const DynamicComponent = dynamic(() => import('../components/hello'))

// function Home() {
// 	return (
// 		<div>
// 			<Header />
// 			<DynamicComponent />
// 			<p>HOME PAGE is here!</p>
// 		</div>
// 	)
// }

// export default Home
