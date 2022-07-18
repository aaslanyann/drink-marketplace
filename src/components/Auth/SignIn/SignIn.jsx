import styles from './style.module.scss';
import { useCallback, useMemo, useState } from 'react'
import CustomBtn from '../../shared/customBtn/CustomBtn';
import { MAIN_COLOR_BLUE } from '../../../constants/colors';
import { v4 as uuidv4 } from 'uuid';
import Field from '../../field/Field';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../redux/common/auth/thunk';
import { selectAuthError } from '../../../redux/common/auth/selectors'
import { checkMail } from '../../../utils/auth'


export default function SignIn() {
	const userStatus = useSelector(selectAuthError);
	const [err,setErr] = useState("");
	const dispatch = useDispatch();
	const fieldsData = useMemo(() => {
		return {
			email: {
				style: { width: '300px' },
				name: 'email',
				label: 'Email',
				variant: 'outlined',
				type: 'email',
				value: '',
			},
			password: {
				style: { width: '300px' },
				label: 'Password',
				name: 'password',
				variant: 'outlined',
				type: 'password',
				value: '',
			},
		};
	}, []);

	const onFieldsChange = useCallback(
		({ name, value }) => {
			if (fieldsData.hasOwnProperty(name)) {
				fieldsData[name].value = value;
			}
		},
		[fieldsData],
	);

	const onSubmit = (e) => {
		e.preventDefault();
		if(checkMail(fieldsData.email.value)) {
			const userData = {
				email: fieldsData.email.value,
				password: fieldsData.password.value,
			};
			dispatch(loginUser(userData));
		} else {
			setErr("Wrong email or password")
		}

	};


	return (
		<div>
			<form className={styles.form} action="" onSubmit={onSubmit}>
				<h1 className={styles.title}>Sign In</h1>
				 <p className={styles.errTitle}>{userStatus?.error || err}</p>
				{Object.values(fieldsData).map((params) => (
					<Field key={uuidv4()} {...params} onChange={onFieldsChange} />
				))}
				<CustomBtn
					style={{ background: MAIN_COLOR_BLUE, minWidth: '150px' }}
					text="Sign In"
					type="submit"
				/>
			</form>
		</div>
	);
}
