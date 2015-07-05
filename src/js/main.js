(function () {
    var app = angular.module('takeTurnsApp', ['ngRoute']);
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/arguments', {
                templateUrl: 'partials/argument_list.html',
                controller: 'ArgumentListController',
                controllerAs: 'argumentList'
            })
            .when('/arguments/:argumentId', {
                templateUrl: 'partials/argument_detail.html',
                controller: 'ArgumentDetailController',
                controllerAs: 'argumentDetail'
            })
            .otherwise({
                redirectTo: '/arguments'
            });
        $locationProvider.html5Mode(true);
    });

    app.directive('addArgumentModal', function() {
        return {
            templateUrl: 'partials/add_argument.html'
        };
    });

    app.controller('MainController', ['$scope', function ($scope) {
        $scope.arguments = {};
        $scope.currentArgument = null;
    }]);
})();
