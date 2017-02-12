function loadUsers(userIds, load, done) {
  var users = []
  userIds.forEach(function (user, index) {
    load(user, function (user) {
    	if (user) {
    		users.push(user);
    	}
    	if (index === userIds.length - 1) {
    		done(users);
    	}
    });
  });
}

module.exports = loadUsers