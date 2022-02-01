(function () {
  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);
  CounterController.$inject = ["$scope"];
  function CounterController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = " Richmond";

    $scope.showNumberOfWatcher = function () {
      console.log("# of watchers: " + $scope.$$watchersCount);
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };

    $scope.upCounter = function () {
      $scope.counter++;
    };

    $scope.$watch(function () {
      console.log("Digest Loop Fired!");
    });

    // $scope.$watch("onceCounter", function (newValue, oldValue) {
    //   console.log("ONCE COUNTER");
    //   console.log("old value: ", oldValue);
    //   console.log("new value: ", newValue);
    // });
    // $scope.$watch("counter", function (newValue, oldValue) {
    //   console.log("COUNTER");
    //   console.log("old value: ", oldValue);
    //   console.log("new value: ", newValue);
    // });
  }
})();
