(function () {
    var app = angular.module('takeTurnsApp', ['ngRoute']);
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/arguments', {
                templateUrl: 'templates/argument_list.html',
                controller: 'ArgumentListController',
                controllerAs: 'argumentList'
            })
            .when('/arguments#addArgument', {
                templateUrl: 'templates/add_argument.html',
                controller: 'AddArgumentController',
                controllerAs: 'addArgument'
            })
            .when('/arguments/:argumentId', {
                templateUrl: 'templates/argument_detail.html',
                controller: 'ArgumentDetailController',
                controllerAs: 'argumentDetail'
            })
            .when('/arguments/:argumentId#addKid', {
                templateUrl: 'templates/argument_add_kid.html',
                controller: 'ArgumentAddKidController',
                controllerAs: 'argumentAddKid'
            })
            .otherwise({
                redirectTo: '/arguments'
            });
        $locationProvider.html5Mode(true);
    });
})();
