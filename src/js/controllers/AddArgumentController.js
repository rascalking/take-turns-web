(function () {
    var app = angular.module('takeTurnsApp');
    app.controller('AddArgumentController', ['$scope',
        function ($scope) {
            this.argument = "";
            this.kids = [];
            this.newKid = "";

            this.addKid = function() {
                this.kids.push(this.newKid);
                this.newKid = "";
            };

            this.reset = function() {
                this.argument = "";
                this.kids = [];
                this.newKid = "";
            };

            this.saveArgument = function() {
                $scope.addArgument(this.argument, this.kids);
                this.reset();
            };
        }
    ]);
})();
