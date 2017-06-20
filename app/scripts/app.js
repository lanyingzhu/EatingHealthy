'use strict';

angular.module('eatinghealthyApp', ['ui.router', 'ngResource', 'ngDialog'])
  .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'carousel': {
                        templateUrl : 'views/carousel.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'MenuController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })

            // route for the dishdetail page
            .state('app_id', {
                url: '/:id',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'carousel': {
                        templateUrl : 'views/carousel.html'
                    },
                    'content': {
                        templateUrl : 'views/recipedetail.html',
                        controller  : 'RecipeDetailController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })

            // route for the aboutus page
            .state('app.asian', {
                url:'asian',
                views: {
                    'content@': {
                        templateUrl: 'views/asian.html',
                        controller  : 'MenuController'
                   }
                }
            })
            // route for the contactus page
            .state('app.america', {
                url:'america',
                views: {
                    'content@': {
                        templateUrl : 'views/america.html',
                        controller  : 'MenuController'
                     }
                }
            })

            // route for the menu page
            .state('app.europe', {
                url: 'europe',
                views: {
                    'content@': {
                        templateUrl : 'views/europe.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.asian_id', {
                url: 'asian/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/recipedetail.html',
                        controller  : 'RecipeDetailController'
                   }
                }
            })

             // route for the dishdetail page
            .state('app.europe_id', {
                url: 'europe/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/recipedetail.html',
                        controller  : 'RecipeDetailController'
                   }
                }
            })

             // route for the dishdetail page
            .state('app.america_id', {
                url: 'america/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/recipedetail.html',
                        controller  : 'RecipeDetailController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    });
