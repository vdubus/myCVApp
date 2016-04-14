/**
 *
 */
var app = angular.module("app", ["ngRoute"]);
app.controller("editExpController", ["$scope", function ($scope) {

}]);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		controller:'experienceController as experienceController',
		templateUrl:'templates/experience/list.html'
	}).when('/experience/new', {
		templateUrl: 'templates/experience/edit.html',
		controller: 'editExpController'
	}).otherwise({
		redirectTo: "/"
	});
});