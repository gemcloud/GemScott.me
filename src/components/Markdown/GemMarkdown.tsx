import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
// import { SpecialComponents } from 'react-markdown/lib/ast-to-react'
// import { NormalComponents, SpecialComponents, } from 'react-markdown/lib/ast-to-react'
// import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { FunctionComponent } from 'react'

interface IProps {
	content: string
}

const GemMarkdown: FunctionComponent<IProps> = ({ content }) => {
	// const components: Partial<SpecialComponents> = {
	// 	code({ node, inline, className, children, ...props }) {
	// 		const match = /language-(\w+)/.exec(className || '')

	// 		return !inline && match ? (
	// 			<SyntaxHighlighter
	// 				style={materialLight}
	// 				PreTag='div'
	// 				language={match[1]}
	// 				children={String(children).replace(/\n$/, '')}
	// 				{...props}
	// 			/>
	// 		) : (
	// 			<code className={className ? className : ''} {...props}>
	// 				{children}
	// 			</code>
	// 		)
	// 	},
	// }
	// console.log({ content })
	return (
		<div className='markdown-body'>
			{/* <ReactMarkdown components={components} children={content} /> */}
			{/* <ReactMarkdown components={components}>{content}</ReactMarkdown> */}
			<ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
		</div>
	)
}

export default GemMarkdown
