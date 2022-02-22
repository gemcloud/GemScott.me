import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
// import { useRouter } from 'next/router'
import { useMdxComponentsContext } from '@/context/MdxComponents'
import { getPost } from '@/utils/GemMdxUtils'
import { ICV } from '@/types/ICV'
import Technologies from '@/components/StarRatings/Technologies'
import CVTimelines from '@/components/Timelines/CVTimelines'

// #### 1. components on MDX files
// V4.0 use ==> React.ComponentProps < typeof mdx.MDXProvider > ['components']

const components = {
	Technologies,
	CVTimelines,
	// Ingredients, use dynamic. // import Ingredients from '@/components/Ingredients'
	Ingredients: dynamic(() => import('../components/Ingredients')),
}

// #### 2.Props
type Props = {
	source: MDXRemoteSerializeResult
	frontMatter: Omit<ICV, 'slug'>
}

// #### Main function
const CV: React.FC<Props> = ({ source, frontMatter }: Props) => {
	// const router = useRouter()
	const lang = 'en' // router.locale

	const { setLang, setIngredients, setTechnologies, setTimelines } =
		useMdxComponentsContext()

	useEffect(() => {
		setLang(lang)
		setIngredients(frontMatter.ingredients)
		setTechnologies(frontMatter.technologies)
		setTimelines(frontMatter.timelines)
	}, [
		frontMatter.ingredients,
		frontMatter.technologies,
		frontMatter.timelines,
		lang,
		setIngredients,
		setTechnologies,
		setTimelines,
		setLang,
	])

	return (
		<>
			<article className='dark:prose-dark prose prose-green'>
				<MDXRemote {...source} components={components} />
			</article>
		</>
	)
}

export default CV // export Main function

// #### get-Static-Props

// export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
export const getStaticProps: GetStaticProps = async () => {
	const { content, data } = getPost('gemcv')
	const mdxSource = await serialize(content, { scope: data })

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	}
}

// #### get-Static-Paths
// export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
// 	const posts = getAllPosts(['slug'])

// 	const paths = locales!.flatMap(locale =>
// 		posts.map(post => ({
// 			params: {
// 				slug: post.slug,
// 			},
// 			locale,
// 		}))
// 	)

// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }
