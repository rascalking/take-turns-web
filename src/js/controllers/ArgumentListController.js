(function () {
    var app = angular.module('takeTurnsApp');
    app.controller('ArgumentListController', ['$scope',
        function ($scope) {
            $scope.addingArgument = false;

            $scope.hasArguments = function() {
                return Object.keys($scope.arguments).length > 0;
            };

            $scope.showAddArgumentModal = function() {
                $scope.addingArgument = true;
            };

            $scope.hideAddArgumentModal = function() {
                $scope.addingArgument = false;
            };

            $scope.addArgument = function(argument, kids) {
                $scope.arguments[argument] = kids;
            };
        }
    ]);
})();
