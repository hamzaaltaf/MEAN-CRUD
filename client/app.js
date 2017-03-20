var myapp = angular.module('myapp',['ngRoute'])
myapp.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/employees' ,{
			templateUrl: 'templates/index.html',
			controller: 'empController'
		})
		.when('/employees/create' ,{
			templateUrl: 'templates/create.html',
			controller: 'empController'
		})
		.when('/employees/:id/show' ,{
			templateUrl: 'templates/show.html',
			controller: 'empController'
		})
		.when('/employees/:id/edit' ,{
			templateUrl: 'templates/edit.html',
			controller: 'empController'
		})
		.when('/employees/:id/delete' ,{
			templateUrl: 'templates/index.html',
			controller: 'empController'
		})
	})


