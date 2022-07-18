import { useState } from 'react'
import styles from '../style.module.scss'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'


const Description = ({description}) => {
	const [openDescription, setOpenDescription] = useState(false);

	return (
		<div>
			<button className={styles.descriptionBtn} onClick={() => setOpenDescription(!openDescription)}>
				<span>{openDescription ? <RemoveIcon /> : <AddIcon />}</span>
				<span>Description</span>
			</button>
			<p className={styles.descriptionText}>{openDescription ? description : ""}</p>
		</div>
	)
}

export default Description