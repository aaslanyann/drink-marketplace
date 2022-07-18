import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4 } from 'uuid';

export default function FilteredList({ data, title, onChange, selectItem }) {
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List sx={{ width: '150px' }} component="nav" aria-labelledby="nested-list-subheader">
			<ListItemButton onClick={handleClick}>
				<ListItemText primary={`${title}    ${selectItem}`} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					{data.map((elem) => (
						<ListItemButton
							key={uuidv4()}
							onClick={(e) => {
								onChange(e, elem);
								setOpen(false);
							}}
						>
							<ListItemText primary={elem} />
						</ListItemButton>
					))}
				</List>
			</Collapse>
		</List>
	);
}
