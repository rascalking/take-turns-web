(function () {
    var app = angular.module('takeTurnsApp', ['ngRoute', 'ngResource']);

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

    app.controller('MainController',
                   ['$scope', '$resource',
        function ($scope, $resource) {
            $scope.api_url = 'http://192.168.99.100:5000/';
            $scope.Argument = $resource($scope.api_url);
            $scope.arguments = {};
            $scope.arguments = $scope.Argument.get();
            
            $scope.addArgument = function(argument, kids) {
                $scope.arguments[argument] = kids;
            };
        }
    ]);
})();
