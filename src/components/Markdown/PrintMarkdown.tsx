import React from 'react'
import MarkdownToHtml from '@/components/Markdown/MarkdownToHtml'
import markdownStyles from './markdown-styles.module.css'

interface IProps {
	markdownString: string
}

export default function PrintMarkdown({ markdownString }: IProps) {
	return (
		<div className={`prose ${markdownStyles.markdown}`}>
			<MarkdownToHtml content={markdownString}></MarkdownToHtml>
		</div>
	)
}
