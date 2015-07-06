(function () {
    var app = angular.module('takeTurnsApp');
    app.controller('ArgumentListController', ['$scope',
        function ($scope) {
            $scope.hasArguments = function() {
                return Object.keys($scope.arguments).length > 0;
            };
        }
    ]);
})();
