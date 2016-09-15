angular.module('app').controller('mvFriendsCtrl',['$scope', 'mvFriend', 'mvCachedFriends', function($scope, mvFriend, mvCachedFriends) {

	mvCachedFriends.query().$promise.then(function(friends) {
		console.log(friends);
	});
}]);