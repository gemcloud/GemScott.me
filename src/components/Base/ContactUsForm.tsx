// Implement ContactUs to use www.emailjs.com
import React from 'react'
// import { ChangeEvent, SyntheticEvent, useState } from 'react'
import styles from '../styles/Contact.module.css'
// import axios from 'axios'

export default function ContactUs() {
	return (
		<main className={`main`}>
			<div className={'container'}>
				<div className={'content'}>
					<h1>Contact</h1>
					<div>
						<form className={styles.contactform}>
							<div className={styles.form_group}>
								<label className={styles.label} htmlFor='name'>
									Name
								</label>
								<br />
								<input
									className={styles.inputfield}
									type='text'
									name='name'
									id='name'
								/>
							</div>
							<div className={styles.form_group}>
								<label className={styles.label} htmlFor='email'>
									Email
								</label>
								<br />
								<input
									className={styles.inputfield}
									type='email'
									name='email'
									id='email'
								/>
							</div>
							<div className={styles.form_group}>
								<label className={styles.label} htmlFor='subjet'>
									Subject
								</label>
								<br />
								<input
									className={styles.inputfield}
									type='text'
									name='subject'
									id='subject'
								/>
							</div>
							<div className={styles.form_group}>
								<label className={styles.label} htmlFor='message'>
									Message
								</label>
								<br />
								<textarea
									className={styles.inputfield}
									name='message'
									id='message'
									cols={30}
									rows={10}
								></textarea>
							</div>
							<div
								className={`${styles.form_group}
                ${styles.submit_button_div}`}
							>
								<button className={styles.submit_button}>Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</main>
	)
}
