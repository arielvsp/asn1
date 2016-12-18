(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.tooMuch  = false;

  $scope.checkIfTooMuch = function () {
    if($scope.dishes.split(",").length <= 3) {
		$scope.tooMuch  = false;
	} else {
		$scope.tooMuch  = true;
	}
  };
}

})();
