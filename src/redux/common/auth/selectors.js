export const selectUser = ({ auth: { user, isLoad } }) => ({
	user,
	isLoad,
});
export const selectAuthError = ({auth:{status}}) => status;