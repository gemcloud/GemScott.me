import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogLanding({ posts }: any) {
	return (
		<>
			<div>blog</div>
			<div className='grid grid-cols-1 p-4 md:grid-cols-3 md:p-0 lg:grid-cols-4'>
				{posts.map(({ slug, frontmatter }: any) => (
					<div
						key={slug}
						className='shadow-lg flex flex-col overflow-hidden rounded-xl border border-gray-200 marker:m-2'
					>
						<Link href={`/post/${slug}`}>
							<a>
								<Image
									width={650}
									height={340}
									alt={frontmatter.title}
									src={`/${frontmatter.featuredImage}`}
								/>
								<h1 className='p-4'>{frontmatter.title}</h1>
							</a>
						</Link>
					</div>
				))}
			</div>
		</>
	)
}

// getInitialProps or getServerSideProps or GetStaticPaths or getStaticProps

// export async function getStaticProps() {
// 	const posts = getAllBlogPosts()
// 	return {
// 		props: {
// 			posts,
// 		},
// 	}
// }

// export async function getStaticPaths() {
// 	const posts = getAllBlogPosts()
// 	const paths = posts.map(({ slug }) => ({
// 		params: {
// 			slug,
// 		},
// 	}))
// 	return {
// 		paths,
// 		fallback: false,
// 	}
// }

// export const getStaticProps: GetStaticProps = async => {
// 	console.log('hello blog landing... ')
// 	const pagesDirectory = join(process.cwd(), '_pages')
// 	const postBlogsDirectory = join(pagesDirectory, 'postblogs')

// 	const files = fs.readdirSync(postBlogsDirectory)

// 	const posts = files.map(fileName => {
// 		const slug = fileName.replace('.md', '')
// 		const fullPath = join(postBlogsDirectory, `${fileName}`)
// 		const readFile = fs.readFileSync(fullPath, 'utf8')

// 		const { data: frontmatter } = matter(readFile)
// 		return {
// 			slug,
// 			frontmatter,
// 		}
// 	})
// 	console.log('posts = ' + posts)
// 	return {
// 		props: {
// 			posts,
// 		},
// 	}
// }
