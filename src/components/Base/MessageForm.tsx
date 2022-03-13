import React from 'react'
import { useState, useReducer } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const initialState = {
	name: '',
	email: '',
	message: '',
}

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'name':
			return { ...state, name: action.value }
		case 'email':
			return { ...state, email: action.value }
		case 'message':
			return { ...state, message: action.value }
		default:
			throw new Error()
	}
}

export default function MessageForm() {
	const [formState, dispatch] = useReducer(reducer, initialState)
	const [showFormErr, setShowFormErr] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState({
		title: '',
		paragraph: '',
	})
	const [showCaptcha, setShowCaptcha] = useState(false)
	const { name, email, message } = formState

	const submitFormAndShowCaptcha = (e: any) => {
		e.preventDefault()
		setShowCaptcha(true)
	}

	const sendEmail = (captchaValue: any) => {
		if (name === '' || email === '' || message === '') {
			setShowFormErr(true)
			return
		}

		const params = {
			...formState,
			'g-recaptcha-response': captchaValue,
		}

		setFormSubmitted({ title: 'Sending message...', paragraph: '' })
		emailjs
			.send(
				// process.env.EMAIL_JS_SERVICE || '',
				// process.env.EMAIL_JS_TEMPLATE || '',
				// params,
				// process.env.EMAIL_JS_USER || ''
				'service_s8b4bcz',
				// parseInt(<string>process.env.PORT, 10) || 3000
				'template_qbou7rc',
				params,
				'user_MQ2zyFJApXfBDchhFSbWj'
			)
			.then(
				({ status }) => {
					if (status === 200) {
						setFormSubmitted({
							title: 'Message has been sent',
							paragraph: 'Scott will be in contact with you soon.',
						})
					} else {
						setFormSubmitted({
							title:
								'Unexpected status code returned from EmailJS, try again later',
							paragraph: 'Please contact me either by phone or email.',
						})
					}
				},
				err => {
					// eslint-disable-next-line no-console
					console.log(err)
					setFormSubmitted({
						title: 'Error sending message, try again later',
						paragraph: 'Please contact me either by phone or email.',
					})
				}
			)
	}

	return formSubmitted.title === '' ? (
		<div>
			<h2 className='mb-6 text-2xl font-bold'>Drop me a message</h2>
			{!showCaptcha ? (
				<form onSubmit={submitFormAndShowCaptcha}>
					<div className='mb-4 flex flex-col'>
						<label className='mb-3' htmlFor='email'>
							Your Name
						</label>
						<input
							id='contact-form-name'
							className='rounded-md border-2 border-indigo-600 bg-white py-2 px-4'
							type='text'
							value={name}
							placeholder='Your Name'
							onChange={e => dispatch({ type: 'name', value: e.target.value })}
							required
						/>
					</div>
					<div className='mb-4 flex flex-col'>
						<label className='mb-3' htmlFor='email'>
							Your e-mail
						</label>
						<input
							id='contact-form-email'
							className='rounded-md border-2 border-indigo-600 bg-white py-2 px-4'
							type='email'
							value={email}
							placeholder='info@example.com'
							onChange={e => dispatch({ type: 'email', value: e.target.value })}
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label className='my-2' htmlFor='message'>
							Your message
						</label>
						<textarea
							rows={5}
							id='contact-form-message'
							className='rounded-md border-2 border-indigo-600 bg-white py-2 px-4'
							value={message}
							onChange={e =>
								dispatch({ type: 'message', value: e.target.value })
							}
							placeholder='Hey, I would like to get in touch with you'
							required
						/>
					</div>
					{showFormErr ? (
						<p className='text-red-400 sm:mr-4'>
							Please fill in all three input boxes to send a message
						</p>
					) : null}
					<button
						className='mt-4 rounded-md bg-indigo-600 px-8 py-4 text-white'
						type='submit'
					>
						Submit
					</button>

					{/* <div className='font-open-sans flex flex-col justify-start sm:flex-row'>
						<div className='w-100 flex flex-col items-end sm:mr-4 sm:w-1/2 md:w-2/5'>
							<label
								className='my-2 block w-full font-bold text-gray-500'
								htmlFor='contact-form-name'
							>
								Name:
								<input
									id='contact-form-name'
									className='focus:border-theme-green w-full appearance-none rounded border-2 border-gray-200 p-2 leading-tight text-gray-700 focus:outline-none'
									type='text'
									value={name}
									onChange={e =>
										dispatch({ type: 'name', value: e.target.value })
									}
									required
								/>
							</label>
							<label
								className='my-2 block w-full font-bold text-gray-500'
								htmlFor='contact-form-email'
							>
								Email:
								<input
									id='contact-form-email'
									className='focus:border-theme-green w-full appearance-none rounded border-2 border-gray-200 p-2 leading-tight text-gray-700 focus:outline-none'
									type='email'
									value={email}
									onChange={e =>
										dispatch({ type: 'email', value: e.target.value })
									}
									required
								/>
							</label>
						</div>
						<div className='w-full sm:mx-4 sm:w-1/2 md:w-3/5'>
							<label
								className='my-2 block font-bold text-gray-500'
								htmlFor='contact-form-message'
							>
								Message:
								<textarea
									rows={5}
									id='contact-form-message'
									className='focus:border-theme-green w-full appearance-none rounded border-2 border-gray-200 p-2 leading-tight text-gray-700 focus:outline-none'
									// type='text'
									value={message}
									onChange={e =>
										dispatch({ type: 'message', value: e.target.value })
									}
									required
								/>
							</label>
						</div>
					</div>
					<div className='flex w-full flex-col items-center justify-end sm:flex-row'>
						{showFormErr ? (
							<p className='text-red-400 sm:mr-4'>
								Please fill in all three input boxes to send a message
							</p>
						) : null}
						<button
							className='mt-4 rounded-md bg-indigo-600 px-8 py-4 text-white'
							type='submit'
						>
							Send
						</button>
					</div> */}
				</form>
			) : (
				<ReCAPTCHA
					// sitekey={process.env.CAPTCHA_SITE_KEY || ''}
					sitekey='6LdNU_cdAAAAADV9NeiCkHfWjUG9ss-Q7kQOl01U'
					onChange={sendEmail}
				/>
			)}
		</div>
	) : (
		<div className='flex flex-col items-center '>
			<h1 className='text-lato text-2xl font-bold text-green-600'>
				{formSubmitted.title}
			</h1>
			<p className='text-lato text-2xl font-bold text-green-600'>
				{formSubmitted.paragraph}
			</p>
		</div>
	)
}
