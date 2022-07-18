import styles from '../style.module.scss'


const LeftSide = ({image}) => {
	return (
		<div className={styles.leftSide}>
			<div className={styles.imgBlock}>
				<img src={image} alt='img' className={styles.image}/>
			</div>
		</div>
	)
}

export default LeftSide