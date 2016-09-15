angular.module('app').factory('mvFriend', ['$resource', function($resource) {
	var FriendResource = $resource('http://private-06bf0-collaborationgrouptest.apiary-mock.com/friends/:id', {id: "@id"});

	return FriendResource;
}]);