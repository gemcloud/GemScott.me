import React from 'react'
import { NextPage } from 'next'

import CryptoList from '@/components/Shared/CryptoList'
// import './styles.css'
import styles from '@/styles/CryptoItem.module.scss'

const crypto: NextPage = () => {
	return (
		<div className={styles.root}>
			<CryptoList />
		</div>
	)
}

export default crypto // export me!
