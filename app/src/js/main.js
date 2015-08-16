(function () {
    var app = angular.module('takeTurnsApp', ['ngRoute', 'ngResource']);

    app.config(['$routeProvider', '$locationProvider', '$resourceProvider',
                function($routeProvider, $locationProvider, $resourceProvider) {
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

        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);

    app.directive('addArgumentModal', function() {
        return {
            templateUrl: 'partials/add_argument.html'
        };
    });

    app.controller('MainController',
                   ['$scope', '$resource',
        function ($scope, $resource) {
            $scope.api_url = '/api/';
            $scope.Argument = $resource($scope.api_url);
            $scope.arguments = {};
            $scope.arguments = $scope.Argument.get();
            
            $scope.addArgument = function(argument, kids) {
                $scope.arguments[argument] = kids;
                $scope.arguments.$save();
            };
        }
    ]);
})();
