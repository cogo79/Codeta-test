angular.module('app')
.controller('mvUserConfirmCtrl', ['$scope', 'mvUserConfirm', function($scope, mvUserConfirm) {
	$scope.confirm = function() {
		mvUserConfirm.confirm();
	};
	$scope.cancel = function() {
		mvUserConfirm.cancel();
	};
	$scope.messageData = mvUserConfirm.messageData();
}])
.directive('userConfirmDelete', function() {
	return {
		restrict: 'E',
		templateUrl: '/partials/friends/confirm-delete-friend'
	};
}).factory('mvUserConfirm', ['$q', function($q) {
	var _letUserConfirm = false;
	var dfd;
	var messageData;
	return {
		letUserConfirm: function(msgd) {
			dfd = $q.defer();
			_letUserConfirm = true;
			if (msgd) {
				messageData = msgd;
			}
			
			return dfd.promise;
		},
		confirm: function() {
			_letUserConfirm = false;
			dfd.resolve();
		},
		cancel: function() {
			_letUserConfirm = false;
			dfd.reject("User canceled");
		},
		userShouldConfirm: function() {
			return _letUserConfirm;
		},
		messageData: function() {
			return messageData;
		}
	};
}]);