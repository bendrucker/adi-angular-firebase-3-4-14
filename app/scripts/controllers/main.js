'use strict';

angular.module('adiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addThing = function (thing) {
      $scope.awesomeThings.push(thing);
      $scope.newThing = '';
    };

    $scope.isNew = function (thing) {
      return thing.indexOf('new') !== -1;
    };
  });
