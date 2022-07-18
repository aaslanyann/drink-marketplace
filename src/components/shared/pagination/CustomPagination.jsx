import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomPagination({ onChange, count }) {
	return (
		<Stack spacing={2}>
			<Pagination
				defaultPage={1}
				onChange={onChange}
				count={count || 1}
				renderItem={(item) => (
					<PaginationItem
						components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
						{...item}
					/>
				)}
			/>
		</Stack>
	);
}
