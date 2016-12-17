(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController($scope,
                       $filter,
                       $injector) {
  $scope.dishes = "";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

function AnnonateMe(name, job, blah) {
  return "Blah!";
}

console.log(DIController.toString());

})();
