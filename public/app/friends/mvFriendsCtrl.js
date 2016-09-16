angular.module('app').controller('mvFriendsCtrl',['$scope', 'mvFriend', 'mvCachedFriends', '$location', function($scope, mvFriend, mvCachedFriends, $location) {
	$scope.friends;
	mvCachedFriends.query().$promise.then(function(friends) {
		$scope.friends = friends;
	});

	$scope.gotoProfile = function(_id) {
		console.log("gotoProfile id:"+_id);
		$location.path('/profile/'+_id);
	}

	$scope.delete = function($event, _id) {
		$event.stopPropagation();
		console.log("delete id:"+_id);
	}
}]);