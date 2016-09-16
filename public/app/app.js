
angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {templateUrl:'/partials/friends/friends', controller: 'mvFriendsCtrl'})
		.when('/profile/:id', {templateUrl:'/partials/friends/profile', controller: 'mvProfileCtrl'
		})
		.otherwise('/');
}]);

