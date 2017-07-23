'use strict';

angular.module('eatinghealthyApp')
      .controller('MenuController', ['$scope','homeFactory', function ($scope, homeFactory) {
          $scope.showRecipe = false;
          $scope.message = "Loading ...";
          $scope.recipes = new Array();

          homeFactory.getRecipes().query(
            function(response) {
              for (var i=0; i<response.rows.length; i++) {
                console.log(response.rows[i].doc);
                $scope.recipes.push(response.rows[i].doc);
              }
              $scope.showRecipe = true;
            },
            function(response) {
              console.log(response);
              $scope.message = "Error: "+response.status + " " + response.statusText;

            });

      }])

      .controller('RecipeDetailController', ['$scope', '$state', '$rootScope', '$stateParams', 'homeFactory', 'commentFactory', 'AuthFactory', function ($scope, $state, $rootScope, $stateParams, homeFactory, commentFactory, AuthFactory) {
            $scope.showRecipe = true;
            $scope.message = "Loading ...";
            $scope.recipe = {};
            $scope.authed = false;

            if(AuthFactory.isAuthenticated()) {
              $scope.authed = true;
              $scope.username = AuthFactory.getUsername();
            }

            $scope.recipe = homeFactory.getRecipes().get({id:$stateParams.id})
              .$promise.then(
                  function(response){
                      $scope.recipe = response;

                      console.log($scope.recipe);
                      $scope.recipe.direction = $scope.recipe.direction.split(";");
                      $scope.recipe.ingredient = $scope.recipe.ingredient.split(";");
                      console.log($scope.recipe);
                      $scope.showRecipe = true;
                  },
                  function(response) {
                      $scope.message = "Error: "+response.status + " " + response.statusText;
                  }
            );

            $scope.mycomment = {
                rating: 5,
                comment: ""
            };

            $scope.submitComment = function () {
                console.log($scope.mycomment);
                $scope.mycomment.author = $scope.username;
                commentFactory.save({id: $stateParams.id}, $scope.mycomment, function(resp) {
                    if (resp.ok) {
                        $scope.recipe.comments.push($scope.mycomment);
                    }
                });

                $state.go($state.current, {}, {reload: true});

                //$scope.commentForm.$setPristine();
                /*
                $scope.mycomment = {
                    rating: 5,
                    comment: ""
                };
                */
            };
            $rootScope.$on('login:Successful', function () {
                $scope.authed = AuthFactory.isAuthenticated();
                $scope.username = AuthFactory.getUsername();
            });

            $rootScope.$on('registration:Successful', function () {
                $scope.authed = AuthFactory.isAuthenticated();
                $scope.username = AuthFactory.getUsername();
            });
            
            $rootScope.$on('logout:Successful', function () {
                $scope.authed = false;
            });
      }])

      .controller('HeaderController', ['$scope', '$state', '$rootScope', 'ngDialog', 'AuthFactory', function ($scope, $state, $rootScope, ngDialog, AuthFactory) {

            $scope.loggedIn = false;
            $scope.username = '';

            if(AuthFactory.isAuthenticated()) {
                $scope.loggedIn = true;
                $scope.username = AuthFactory.getUsername();
            }

            $scope.openLogin = function () {
                ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController" });
            };

            $scope.logOut = function() {
                AuthFactory.logout();
                $scope.loggedIn = false;
                $scope.username = '';
                $rootScope.$broadcast("logout:Successful");
            };

            $rootScope.$on('login:Successful', function () {
                $scope.loggedIn = AuthFactory.isAuthenticated();
                $scope.username = AuthFactory.getUsername();
            });

            $rootScope.$on('registration:Successful', function () {
                $scope.loggedIn = AuthFactory.isAuthenticated();
                $scope.username = AuthFactory.getUsername();
            });

            $scope.stateis = function(curstate) {
               return $state.is(curstate);
            };

      }])

      .controller('LoginController', ['$scope', 'ngDialog', '$localStorage', 'AuthFactory', function ($scope, ngDialog, $localStorage, AuthFactory) {

            $scope.loginData = $localStorage.getObject('userinfo','{}');

            $scope.doLogin = function() {
                if($scope.rememberMe)
                   $localStorage.storeObject('userinfo',$scope.loginData);

                AuthFactory.login($scope.loginData);
                ngDialog.close();
            };

            $scope.openRegister = function () {
                ngDialog.open({ template: 'views/register.html', scope: $scope, className: 'ngdialog-theme-default', controller:"RegisterController" });
            };

            }])

            .controller('RegisterController', ['$scope', 'ngDialog', '$localStorage', 'AuthFactory', function ($scope, ngDialog, $localStorage, AuthFactory) {

            $scope.register={};
            $scope.loginData={};

            $scope.doRegister = function() {
                //console.log('Doing registration', $scope.registration);

                AuthFactory.register($scope.registration);

                ngDialog.close();

            };
      }]);
