import React from 'react'
import MarkdownToHtml from '@/components/Markdown/MarkdownToHtml'
import markdownStyles from './markdown-styles.module.css'

interface IProps {
	markdownString: string
}

export default function PrintMarkdown({ markdownString }: IProps) {
	// const content = unified()
	// 	.use(parse)
	// 	.use(remark2react, {
	// 		remarkReactComponents: {
	// 			a: CustomLink,
	// 		},
	// 	})
	// 	.processSync(markdown).result  //Compile error!!!

	return (
		<div className={markdownStyles.markdown}>
			<MarkdownToHtml content={markdownString}></MarkdownToHtml>
		</div>
	)
}
