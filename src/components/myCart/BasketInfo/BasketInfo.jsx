import styles from '../style.module.scss'
import CustomCheckBox from '../../shared/CustomCheckBox'
import { v4 as uuidv4 } from 'uuid'
import CustomBtn from '../../shared/customBtn/CustomBtn'
import { MAIN_COLOR_CORAL } from '../../../constants/colors'
import { basketChooseLength } from "../../../utils/basket"


const BasketInfo = ({allMoney,basketLength,onChooseAll}) => {


	return (
		<div className={styles.infoForBuyBlock}>
			<div className={styles.infoForBuyContent}>
				<div className={styles.leftSide}>
					<h1 style={{marginBottom: "20px"}}>{`Cart (${basketLength})`}</h1>

				<CustomCheckBox onChange={onChooseAll} label="Choose All" />

				</div>
				<div className={styles.rightSide}>
					<div className={styles.priceBlock}>
						<div className={styles.priceContent}>
							<h3>Order price</h3>
							<div className={styles.toPay}>
								<h3>To pay</h3>
								<h3>{`US ${allMoney} $`}</h3>
								<CustomBtn text={`Buy(${basketLength})`} style={{
									background: MAIN_COLOR_CORAL,
									width: "120px",
									height: "40px",
								}}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BasketInfo