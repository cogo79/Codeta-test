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
				
				mvFriend.delete({id:_id}).$promise.then(function(o) {
					console.log("after delete: ",o);
					mvNotifier.notify('Your so called friend '+friend.name+' has been deleted');
					mvCachedFriends.reset();
					mvCachedFriends.query().$promise.then(function(friends) {
						$scope.friends = friends;
					});
				}, function(error) {
					mvNotifier.error('Your so called friend '+friend.name+' could NOT bee deleted');
				});


			}, function(reason) {
				console.log(reason);
			});
		}, function(error) {
			console.log(error);
		});
		
	}
}]);