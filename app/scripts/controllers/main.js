'use strict';

angular.module('adiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.reverseThings = function () {
      $scope.awesomeThings.reverse();
    };
  });
