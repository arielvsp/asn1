(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.showThisMsg = "";

  $scope.checkIfTooMuch = function () {
	if(!$scope.dishes) {
		$scope.showThisMsg = "Please enter data first";
	} else if($scope.dishes.split(",").length <= 3) {
		$scope.showThisMsg = "Enjoy!";
	} else {
			$scope.showThisMsg = "Too much!";
	}
  };
}
})();
