/// <reference path="../References.ts" />
var MyApp;
(function (MyApp) {
    'use strict';
    var IndexController = (function () {
        function IndexController($scope) {
            this.$scope = $scope;
        }
        IndexController.$inject = ['$scope'];
        return IndexController;
    })();
    MyApp.IndexController = IndexController;
})(MyApp || (MyApp = {}));
/// <reference path="../References.ts" />
var MyApp;
(function (MyApp) {
    'use strict';
    var CreateController = (function () {
        function CreateController($scope) {
            this.$scope = $scope;
            $scope.Title = "Create";
        }
        CreateController.$inject = ['$scope'];
        return CreateController;
    })();
    MyApp.CreateController = CreateController;
})(MyApp || (MyApp = {}));
/// <reference path="../References.ts" />
var MyApp;
(function (MyApp) {
    'use strict';
    var InfoController = (function () {
        function InfoController($scope) {
            this.$scope = $scope;
            $scope.Title = "Information";
        }
        InfoController.$inject = ['$scope'];
        return InfoController;
    })();
    MyApp.InfoController = InfoController;
})(MyApp || (MyApp = {}));
//Typings
/// <reference path="Typings\Angular\angular.d.ts" />
/// <reference path="Typings\Angular\angular-route.d.ts" />
/// <reference path="Typings\Angular\angular-ui-bootstrap.d.ts" />
//Controllers
/// <reference path="Controllers\IndexController.ts" />
/// <reference path="Controllers\CreateController.ts" />
/// <reference path="Controllers\InfoController" /> 
/// <reference path="References.ts" />
var MyApp;
(function (MyApp) {
    'use strict';
    var app = angular.module('app', ['ngRoute', 'ui.bootstrap'])
        .config(['$routeProvider',
        function ($routeProvider) {
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
        .controller('IndexContoller', MyApp.IndexController)
        .controller('CreateController', MyApp.CreateController)
        .controller('InfoContoller', MyApp.InfoController);
})(MyApp || (MyApp = {}));
