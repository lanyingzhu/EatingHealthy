'use strict';

angular.module('eatinghealthyApp')
      .controller('MenuController', ['$scope','homeFactory', function ($scope, homeFactory) {
          $scope.showRecipe = false;
          $scope.message = "Loading ...";
          $scope.recipes = {};

          $scope.recipes = homeFactory.getRecipes().query(
            function(response) {
              $scope.recipes = response;
              $scope.showRecipe = true;
            },
            function(response) {
                $scope.message = "Error: "+response.status + " " + response.statusText;

            });

      }])

      .controller('RecipeDetailController', ['$scope', '$stateParams', 'homeFactory', function ($scope, $stateParams, homeFactory) {
            $scope.showRecipe = true;
            $scope.message = "Loading ...";
            $scope.recipe = {};

            $scope.recipe = homeFactory.getRecipes().get({id:parseInt($stateParams.id,10)})
              .$promise.then(
                  function(response){
                      $scope.recipe = response;
                      $scope.showRecipe = true;
                  },
                  function(response) {
                      $scope.message = "Error: "+response.status + " " + response.statusText;
                  }
            );

      }]);
