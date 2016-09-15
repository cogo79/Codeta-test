angular.module('app').factory('mvCachedFriends', ['mvFriend', function(mvFriend) {
	var friendList;

	return {
		query: function() {
			if (!friendList) {
				friendList = mvFriend.query();
			}

			return friendList;
		},
		reset: function() {
			friendList = null;
		}
	}
}]);