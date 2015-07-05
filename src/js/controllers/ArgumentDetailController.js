(function () {
    var app = angular.module('takeTurnsApp');
    app.controller('ArgumentDetailController', ['$scope', '$routeParams',
        function($scope, $routeParams) { 
            // TODO - handle argumentId not in $scope.arguments
            var ctrl = this;
            ctrl.argument = $routeParams.argumentId;
            ctrl.kids = $scope.arguments[ctrl.argument];

            ctrl.takeTurn = function(index) {
                ctrl.kids.push(ctrl.kids.splice(index, 1)[0]);
            };
        }
    ]);
})();
