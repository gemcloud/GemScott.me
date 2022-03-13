import React from 'react'
// import MarkdownToHtml from '@/components/Markdown/MarkdownToHtml'
// import markdownStyles from './markdown-styles.module.css'
import MessageForm from '../Base/MessageForm'
import PrintMarkdown from '../Markdown/PrintMarkdown'

interface IProps {
	markdownString: string
}

export default function TemplateContact({ markdownString }: IProps) {
	return (
		<>
			<div className='grid content-center items-center justify-items-center gap-8 md:grid-cols-2 md:gap-0'>
				{/* <div className='mx-auto'> */}
				<div className='flex flex-col justify-center p-6'>
					<PrintMarkdown markdownString={markdownString} />
				</div>
				{/* <div className='mt-12 rounded-lg bg-sky-200 p-6 md:mt-0'> */}
				<div className='flex flex-col justify-center p-6'>
					<MessageForm />
				</div>
			</div>
		</>
	)
}
