(function () {
    var app = angular.module('takeTurnsApp');
    app.controller('takeTurnsController',
                   ['$scope', function($scope) { 
        $scope.takeTurn = function(index) {
            $scope.kids.push($scope.kids.splice(index, 1)[0]);
        };
    }]);
})();
