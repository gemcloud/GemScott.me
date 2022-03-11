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

// component level can NOT use "getStaticProps" + "getStaticPaths"!!! only use "getServerSideProps"
// getInitialProps or getServerSideProps or getStaticPaths or getStaticProps
// export async function getServerSideProps() {
// 	const posts = getAllBlogPosts()
// 	return {
// 		props: {
// 			posts,
// 		},
// 	}
// 	// return {
// 	// 	props: {}, // will be passed to the page component as props
// 	// }
// }
