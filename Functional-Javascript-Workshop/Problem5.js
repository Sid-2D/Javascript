function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every((user) => (goodUsers.some((goodUser) => (user === goodUser))));
	};
}
module.exports = checkUsersValid;