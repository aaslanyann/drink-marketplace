import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux'
import { selectNotifications } from '../../../redux/common/notifications/selectors'
import { useEffect, useState } from 'react'


const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notifications() {
	const data = useSelector(selectNotifications);
	const [open, setOpen] = useState(false)
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	useEffect(() => {
		if(data) {
			setOpen(true);
		}
	},[data])

	return (
		<Stack spacing={2} sx={{ width: '100%' }} style={{margin: 0}}>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={data?.type} sx={{ width: '100%' }}>
					{data?.text}
				</Alert>
			</Snackbar>
		</Stack>
	);
}