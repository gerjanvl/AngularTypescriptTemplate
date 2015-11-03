/// <reference path="../References.ts" />
module MyApp {
	'use strict'
	
	export interface IInfoScope extends ng.IScope {
		vm: InfoController;
		Title: String;
	}

	export class InfoController {
		
		static $inject = ['$scope'];

		constructor(private $scope: IInfoScope){
			$scope.Title = "Information"
		}
		
	}
}