(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.tooMuch  = false;
  $scope.showThisMsg = "Blablabla";

  $scope.checkIfTooMuch = function () {

  if($scope.dishes.split(",").length == 0) {
	$scope.showThisMsg = "Please enter data first";
  } else if($scope.dishes.split(",").length <= 3) {
		$scope.tooMuch  = false;
		$scope.showThisMsg = "Please enter data first";
	} else {
		$scope.tooMuch  = true;
		$scope.showThisMsg = "Please enter data first";
	}
  };
}

})();
