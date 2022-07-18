import styles from '../style.module.scss'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../../constants/routePath'


const FooterItem = ({data}) => {
	const {title,field,field1,field2} = data;
	return (
		<div className={styles.item}>
			<h3 className={styles.title}>{title}</h3>
			<div>
				<Link to={HOME_ROUTE} className={styles.link}>
					{field}
				</Link>
				<Link to={HOME_ROUTE} className={styles.link}>
					{field1}
				</Link>
				<Link to={HOME_ROUTE} className={styles.link}>
					{field2}
				</Link>
			</div>
		</div>
	)
}

export default FooterItem