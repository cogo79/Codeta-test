angular.module('app').factory('mvSearchFilter', [function() {
	var searchFilter;
	return {
		set: function(newFilter) {
			searchFilter = newFilter;
		},
		get: function() {
			return searchFilter;
		}
	}
}]);