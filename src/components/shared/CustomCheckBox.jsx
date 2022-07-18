import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { memo, useState } from 'react'

const CustomCheckBox = ({label, onChange = () => {},checked ,name=''}) => {

	const handleChange = (e) => {
		onChange({ name, checked: e.target.checked});
	}
	return (
		<label>
			<Checkbox checked={checked} name={name} onChange={handleChange} />
			{label && label}
		</label>
);
}

export default memo(CustomCheckBox)