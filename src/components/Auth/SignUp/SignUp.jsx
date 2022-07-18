import { TextField } from '@mui/material';
import { useState } from 'react';
import styles from './style.module.scss';
import CustomBtn from '../../shared/customBtn/CustomBtn';
import { MAIN_COLOR_BLUE } from '../../../constants/colors';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc } from 'firebase/firestore';
import { HOME_ROUTE } from '../../../constants/routePath';
import { v4 as uuidv4 } from 'uuid';
import {textFieldData} from "../../../config/signUpFieldsData"
import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../../../redux/common/auth/actions';
import { localStorageService } from '../../../services/localstorageService';
import { checkMail } from '../../../utils/auth'

export default function SignUp() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [err, setErr] = useState('');

	const handleUsernameChange = (e) => setUsername(e.target.value);
	const handleEmailChange = (e) => setEmail(e.target.value);
	const handleBirthdayChange = (e) => setBirthday(e.target.value);
	const handlePasswordChange = (e) => setPassword(e.target.value);
	const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

	const navigate = useNavigate();
	const dispatch = useDispatch();


	const register = async (e) => {
		e.preventDefault();
		if (checkFields()) {
			try {
				const user = await createUserWithEmailAndPassword(auth, email, password);
				setUserData();
			} catch (error) {
				setErr(`Sorry, ${email} is taken.`);
				console.log(error.message);
			}
		}
	};

	const setUserData = async () => {
		const docRef = doc(db, 'users', email);
		const userData = {
			userBasicInfo: {
				username,
				email,
				birthday,
				id: uuidv4(),
			},
			userAddress: {
				country: '',
				region: '',
				city: '',
				street: '',
				building: '',
				house: '',
				postcode: '',
			},
		};
		await setDoc(docRef, userData);
		localStorageService.setAccessToken(email);
		dispatch(setLoggedInUser(userData));
		navigate(HOME_ROUTE);
	};

	const checkFields = () =>
		checkMail(email) && username.length > 3 && password.length >= 6 && password === confirmPassword;

	return (
		<div>
			<form className={styles.form} action="">
				<div className={styles.formBlock}>
					<h1 className={styles.title}>Sign up</h1>
					<p className={styles.errText}>{err}</p>
					{username && username.length < 3 ? (
						<TextField {...textFieldData.username}
									 error
									 helperText="Username must have at least 3 characters."
									 className={styles.input}
									 onChange={handleUsernameChange}
									 value={username}
						/>

					) : (
						<TextField {...textFieldData.username}
									 className={styles.input}
									 onChange={handleUsernameChange}
									 value={username}
						/>

					)}
					{!email.length || checkMail(email) ? (
							<TextField {...textFieldData.email}
										 className={styles.input}
										 onChange={handleEmailChange}
										 value={email}
							/>
					) : (
						<TextField {...textFieldData.email}
									 error
									 className={styles.input}
									 onChange={handleEmailChange}
									 helperText="It doesn't look like an email."
									 value={email}
						/>

					)}
					<TextField {...textFieldData.birthday}
								 className={styles.input}
								 onChange={handleBirthdayChange}
								 value={birthday}
					/>
					{!password || password.length >= 6 ? (
							<TextField {...textFieldData.password}
										 className={styles.input}
										 onChange={handlePasswordChange}
										 value={password}
							/>

					) : (
						<TextField {...textFieldData.password}
									 error
									 className={styles.input}
									 onChange={handlePasswordChange}
									 value={password}
									 helperText="Password must have at least 6 characters."
						/>
					)}
					{!confirmPassword || password === confirmPassword ? (
							<TextField {...textFieldData.confirmPassword}
										 className={styles.input}
										 onChange={handleConfirmPassword}
										 value={confirmPassword}
							/>
					) : (
						<TextField {...textFieldData.confirmPassword}
									 error
									 className={styles.input}
									 onChange={handleConfirmPassword}
									 value={confirmPassword}
									 helperText="Password and confirm must match."
						/>

					)}
					<CustomBtn
						style={{ background: MAIN_COLOR_BLUE, minWidth: 150 }}
						text="Sign Up"
						onClick={register}
					/>
				</div>
			</form>
		</div>
	);
}
