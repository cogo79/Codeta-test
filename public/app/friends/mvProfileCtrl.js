angular.module('app').controller('mvProfileCtrl',['$scope', 'mvFriend', '$routeParams', function($scope, mvFriend, $routeParams) {
	mvFriend.get({id:$routeParams.id}).$promise.then(function(friend) {
		console.log(friend);
	});
}]);