angular.module('das.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.$on('$includeContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);