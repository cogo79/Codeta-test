
angular.module('app').controller('mvNavBarCtrl', ['$scope', '$location', function($scope, $location) {


	$scope.home = function() {
		$location.path('/');
	}

}]);
