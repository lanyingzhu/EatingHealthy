'use strict';

angular.module('eatinghealthyApp')
      .controller('MenuController', ['$scope','homeFactory', function($scope, homeFactory) {

         $scope.recipes = homeFactory.getRecipes();

      }])

      .controller('RecipeDetailController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {

         var recipe = homeFactory.getRecipe(parseInt($stateParams.id,10));

            $scope.recipe = recipe;

        }])
