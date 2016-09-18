angular.module('app').controller('mvFriendsCtrl',['$scope', 'mvFriend', 'mvCachedFriends', '$location', 'mvSearchFilter', 'mvUserConfirm', 'mvNotifier', function($scope, mvFriend, mvCachedFriends, $location, mvSearchFilter, mvUserConfirm, mvNotifier) {
	$scope.friends;

	$scope.filter = mvSearchFilter;

	$scope.userShouldConfirm = mvUserConfirm.userShouldConfirm;

	mvCachedFriends.query().$promise.then(function(friends) {
		$scope.friends = friends;
	});

	$scope.gotoProfile = function(_id) {
		console.log("gotoProfile id:"+_id);
		$location.path('/profile/'+_id);
	}

	$scope.delete = function($event, _id) {
		$event.stopPropagation();
		mvFriend.get({id:_id}).$promise.then(function(friend) {
			mvUserConfirm.letUserConfirm(friend).then(function() {
				mvNotifier.notify('Your so called friend '+friend.name+' has ben deleted');
			}, function(reason) {
				console.log(reason);
			});
		}, function(error) {
			console.log(error);
		});
		
	}
}]);