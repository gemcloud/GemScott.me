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
				'service_diqt22j',
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
							paragraph: 'Mike will be in contact with you soon.',
						})
					} else {
						setFormSubmitted({
							title:
								'Unexpected status code returned from EmailJS, try again later',
							paragraph: 'Please contact Mike either by phone or email.',
						})
					}
				},
				err => {
					// eslint-disable-next-line no-console
					console.log(err)
					setFormSubmitted({
						title: 'Error sending message, try again later',
						paragraph: 'Please contact Mike either by phone or email.',
					})
				}
			)
	}

	return formSubmitted.title === '' ? (
		<div>
			<h3 className='text-lato text-2xl font-light text-white'>
				Send me a message
			</h3>
			{!showCaptcha ? (
				<form onSubmit={submitFormAndShowCaptcha}>
					<div className='font-open-sans flex flex-col justify-start sm:flex-row'>
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
							className='bg-theme-green focus:shadow-outline mt-6 w-full rounded py-2 px-4 text-white focus:outline-none sm:mr-4 md:w-1/4 lg:w-1/5'
							type='submit'
						>
							Send
						</button>
					</div>
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
		<div className='flex flex-col items-center'>
			<h3 className='text-lato text-2xl font-light text-white'>
				{formSubmitted.title}
			</h3>
			<p>{formSubmitted.paragraph}</p>
		</div>
	)
}
