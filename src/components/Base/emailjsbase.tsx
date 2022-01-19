import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export const ContactUs = () => {
	// const form = useRef()
	const contactForm = useRef<HTMLFormElement>(null)

	const sendEmail = (e: any) => {
		e.preventDefault()
		console.log(process.env.EMAIL_JS_SERVICE)
		emailjs
			// .sendForm( emailjs.send("service_diqt22j","template_qbou7rc");
			// 	process.env.EMAIL_JS_SERVICE || '',
			// 	// parseInt(<string>process.env.PORT, 10) || 3000
			// 	process.env.EMAIL_JS_TEMPLATE || '',
			// 	contactForm.current || '',
			// 	process.env.EMAIL_JS_USER || ''
			// )
			.sendForm(
				'service_diqt22j',
				// parseInt(<string>process.env.PORT, 10) || 3000
				'template_qbou7rc',
				contactForm.current || '',
				'user_MQ2zyFJApXfBDchhFSbWj'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	return (
		// <form ref={form} onSubmit={sendEmail}>
		<form ref={contactForm} onSubmit={sendEmail}>
			<label>Name</label>
			{/* <input type='text' name='user_name' />
			<label>Email</label>
			<input type='email' name='user_email' />
			<label>Message</label> */}
			<input type='text' name='to_name' />
			<label>Email</label>
			<input type='email' name='from_name' />
			<label>Message</label>
			<textarea name='message' />
			<input type='submit' value='Send' />
		</form>
	)
}
