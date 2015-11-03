/// <reference path="../References.ts" />
module MyApp {
	'use strict'
	
	export interface ICreateScope extends ng.IScope {
		vm: CreateController;
		Title: String;
	}

	export class CreateController {
		
		static $inject = ['$scope'];

		constructor(private $scope: ICreateScope){
			$scope.Title = "Create";
		}
		
	}
}