/// <reference path="References.ts" />
module MyApp {
	'use strict'

	var app = angular.module('app', ['ngRoute','ui.bootstrap'])
		.config(['$routeProvider',
			($routeProvider: ng.route.IRouteProvider) => {
				$routeProvider
					.when('/', {
						templateUrl: 'view/Index.html',
						controller: 'IndexContoller'
					})
					.when('/Create', {
						templateUrl: 'view/Create.html',
						controller: 'CreateController'
					})
					.when('/Info', {
						templateUrl: 'view/Info.html',
						controller: 'InfoContoller'
					})
					.otherwise({
						redirectTo: "/"
					});
			}
		])
		.controller('IndexContoller', IndexController)
		.controller('CreateController', CreateController)
		.controller('InfoContoller', InfoController);
		
		

}