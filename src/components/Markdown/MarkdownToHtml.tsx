import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

interface IProps {
	content: string // content is real markdown string!!!
}

export default function MarkdownToHtml({ content }: IProps) {
	return (
		<ReactMarkdown remarkPlugins={[gfm]}>
			{/* A testing Markdown string!!!
			 *  React-Markdown* now supports ~strikethrough~. Thanks to gfm plugin.
			 */}
			{content}
		</ReactMarkdown>
	)
}
