'use strict';

angular.module('eatinghealthyApp')
      .controller('MenuController', ['$scope','homeFactory', function ($scope, homeFactory) {
          $scope.showRecipe = false;
          $scope.message = "Loading ...";
          $scope.recipes = {};

          homeFactory.getRecipes()
            .then(
              function (response) {
                $scope.recipes = response.data;
                $scope.showRecipe = true;
              },
              function (response) {
                $scope.message = "Error: "+response.status + " " + response.statusText;
              }
            );

      }])

      .controller('RecipeDetailController', ['$scope', '$stateParams', 'homeFactory', function ($scope, $stateParams, homeFactory) {
            $scope.showRecipe = false;
            $scope.message = "Loading ...";
            $scope.recipe = {};

            homeFactory.getRecipe(parseInt($stateParams.id,10))
            .then(
                function (response) {
                  $scope.recipe = response.data;
                  $scope.showRecipe = true;

                },
                function (response) {
                  $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );

      }]);
