
angular.module('app').controller('mvNavBarCtrl', ['$scope', '$location', '$window', 'mvSearchFilter', function($scope, $location, $window, mvSearchFilter) {
	$scope.history = $window.history;

	$scope.home = function() {
		$location.path('/');
	};

	$scope.search = function() {
		if ($scope.searchText) {
			mvSearchFilter.set($scope.searchText);
			if ($location.path() !== '/') {
				$location.path('/');
			}
		}
	};

	$scope.clearSearchField = function() {
		$scope.searchText = "";
		mvSearchFilter.set(undefined);
	};
}]);
