/* eslint-disable react/prop-types */
import React from 'react'
import useCryptoData from '@/hooks/useCrytoData'
import styles from '@/styles/CryptoItem.module.scss'

const CryptoItem = props => (
	<div className={styles.item}>
		<img src={props.ImageUrl} className={styles.icon} alt={props.Name} />
		<div className='display-container'>
			<div className={styles.name}>{props.Name}</div>
			<div className={styles.fullname}>{props.FullName}</div>
		</div>
		<div className={styles.priceContainer}>
			<div className={styles.price}>{props.Price}</div>
			{/* <div className={`${classes.Content} ${props.collapse ? classes.collapse : ''}`}></div> */}
			<div
				className={`${styles.priceChange} ${
					parseInt(props.Change24hr) < 0
						? `${styles.danger}`
						: `${styles.success}`
				}`}
			>
				{props.Change24hr && `${props.Change24hr}%`}
			</div>
		</div>
	</div>
)

const CryptoList = () => {
	const { cryptoData, isLoading } = useCryptoData()
	return (
		<div>
			<div className={styles.container}>
				{!isLoading ? (
					cryptoData.map(itemData => (
						<CryptoItem key={itemData.Id} {...itemData} />
					))
				) : (
					<p className='loading-text'>Loading Data...</p>
				)}
			</div>
		</div>
	)
}

export default CryptoList
