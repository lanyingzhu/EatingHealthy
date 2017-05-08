'use strict';

angular.module('eatinghealthyApp')
        .constant("baseURL", "http://localhost:3000/")
        .service('homeFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

          this.getRecipes = function () {

            return $resource(baseURL + "recipes/:id", null, {'update':{method:'PUT'}});

          };
        }]);
