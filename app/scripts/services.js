'use strict';

angular.module('eatinghealthyApp')
        .constant("baseURL", "http://localhost:3000/")
        .service('homeFactory', ['$http', 'baseURL', function ($http,baseURL) {

          this.getRecipes = function () {

            return $http.get(baseURL + "recipes");

          };

          this.getRecipe = function (index) {

            return $http.get(baseURL + "recipes/" + index);
          };

        }]);
