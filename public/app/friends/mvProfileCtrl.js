angular.module('app').controller('mvProfileCtrl',['$scope', 'mvFriend', '$routeParams', '$location', function($scope, mvFriend, $routeParams, $location) {
	
	$scope.friend;

	mvFriend.get({id:$routeParams.id}).$promise.then(function(friend) {
		console.log(friend);
		$scope.friend = friend;
	}, function(error) {
		$location.path('/');
	});

}]);