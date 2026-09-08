export function canDeleteAccount(user) {
	if ((user.role = "admin")) {
		return true
	}

	return false
}
