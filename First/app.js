(function () {
  "use strict";
  angular
    .module("myApp", [])
    .controller("myCtrl", myCtrl)
    .filter("loves", LovesFilter)
    .filter("truth", TruthFilter);

  myCtrl.$inject = ["$scope", "lovesFilter"];

  function myCtrl($scope, LovesFilter) {
    $scope.stateOfBeing = "black";

    $scope.sayMessage = function () {
      var msg =
        "Richmond likes to go to the gym everyday, to escape depression";
      return msg;
    };

    $scope.sayLovesMessage = function () {
      var msg =
        "Richmond likes to go to the gym everyday, to escape depression";
      msg = LovesFilter(msg);
      return msg;
    };

    $scope.changeNinja = function () {
      $scope.stateOfBeing = "green";
    };
  }
  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    };
  }
  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
