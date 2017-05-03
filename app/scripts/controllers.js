'use strict';

angular.module('eatinghealthyApp',[])
      .controller('HomeController', ['$scope','homeFactory', function($scope, homeFactory) {

         $scope.recipes = homeFactory.getRecipes();


      }]);
