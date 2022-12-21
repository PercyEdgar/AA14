
let app = angular.module('salaryCalculatorApp', []);


app.controller('salaryCalculatorCtrl', function($scope) {
  $scope.employeeCode = '';
  $scope.hoursWorked = '';
  $scope.hourlyRate = '';


  $scope.calculateBasicSalary = function() {

    if ($scope.employeeCode && $scope.hoursWorked && $scope.hourlyRate) {

      $scope.basicSalary = $scope.hoursWorked * $scope.hourlyRate;

      if ($scope.basicSalary < 500) {
        $scope.discount = 0;
      } else if ($scope.basicSalary >= 500 && $scope.basicSalary <= 1000) {
        $scope.discount = $scope.basicSalary * 0.02;
      } else if ($scope.basicSalary > 1000 && $scope.basicSalary <= 4000) {
        $scope.discount = $scope.basicSalary * 0.08;
      } else if ($scope.basicSalary > 4000 && $scope.basicSalary <= 8000) {
        $scope.discount = $scope.basicSalary * 0.15;
      } else if ($scope.basicSalary > 8000 && $scope.basicSalary <= 10000) {
        $scope.discount = $scope.basicSalary * 0.21;
      } else {
        $scope.discount = $scope.basicSalary * 0.3;
      }
      $scope.netSalary = $scope.basicSalary - $scope.discount;
    }
  }
});