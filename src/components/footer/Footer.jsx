import styles from "./style.module.scss"
import dataForFooter from '../../config/footerData'
import FooterItem from './footerItem/FooterItem'
import { v4 as uuidv4 } from 'uuid'

const Footer = () => {

	return (
		<div>
			<footer className={styles.footer}>
				<div className={styles.footerFlex}>
					{dataForFooter.map((data) => {
						return (
							<FooterItem data={data}  key={uuidv4()}/>
						)
					})}
				</div>
			<div className={styles.end}>
				<span className={styles.endSpan}>COPYRIGHT 2021 BLAZE ALL RIGHTS RESERVED</span>
			</div>
			</footer>
		</div>
	)
}

export default Footer