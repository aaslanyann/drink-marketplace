export const selectSelectedItem = ({selectedItem: {current, isLoad}}) => {
	return {current,
		isLoad}
};