/// <reference path="../References.ts" />
module MyApp {
	'use strict'
	
	export interface IIndexScope extends ng.IScope {
		vm: IndexController;
	}

	export class IndexController {
		
		static $inject = ['$scope'];

		constructor(private $scope: IIndexScope){
				
		}
		
	}
}