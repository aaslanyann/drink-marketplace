import styles from '../style.module.scss'


const AnimationBottle = ({image}) => {

	return (
		<div className={styles.animationBottle}>
			<div className={styles.bottle} style={{backgroundImage: `url(${image})`}}></div>
			<div className={styles.bottle} style={{backgroundImage: `url(${image})`}}></div>
			<div className={styles.bottle} style={{backgroundImage: `url(${image})`}}></div>
		</div>
	)
}


export default AnimationBottle