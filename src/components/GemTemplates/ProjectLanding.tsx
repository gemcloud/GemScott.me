import React from 'react'
import Case from '../Cards/Case'
import PrintMarkdown from '../Markdown/PrintMarkdown'

export default function ProjectLanding({ projects }: any) {
	console.log('frontmatter.logoImage' + projects[0].frontmatter.logoImage)
	return (
		<>
			<div className='mx-6 grid grid-cols-1 gap-6 sm:mx-0 md:grid-cols-2 md:gap-12'>
				{projects.map(({ frontmatter, content }: any) => (
					<Case
						key={frontmatter.index}
						url={frontmatter.projectUrl}
						logoAlt={frontmatter.logoAlt}
						img={frontmatter.logoImage}
						logoWidth={frontmatter.logoWidth}
						tags={frontmatter.postTags}
					>
						<PrintMarkdown markdownString={content} />
					</Case>
				))}
			</div>
		</>
	)
}
