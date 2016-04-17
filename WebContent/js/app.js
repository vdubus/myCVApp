/**
 *
 */
var app = angular.module("app", ["ngRoute"]);
app.controller("editExpController", ["$scope", function ($scope) {
	// localStorage
	var editCtrl = this;
	editCtrl.values = [];
	editCtrl.add = function(){
		editCtrl.values.push(editCtrl.value);
		editCtrl.value = '';
	}
}]);
app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		controller:'mainController',
		templateUrl:'templates/main.html'
	}).when('/experience/new', {
		templateUrl: 'templates/experience/edit.html',
		controller: 'editExpController as editCtrl'
	}).otherwise({
		redirectTo: "/"
	});
});