'use strict';

angular.module('eatinghealthyApp')
        .factory('homeFactory', function() {

          var homefac = {};
          var recipes=[
            {
             _id:0,
             name:'Breakfast Grilled Cheese Tocas',
             image:'images/Breakfast Grilled Cheese Tocas.jpg',
             Ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             Directions:'',
             comment: 'Fine'
          },
          {
             _id:1,
             name:'Asian-chicken-corn-and-noodle-soup',
             area: 'Asian',
             image:'images/asian-chicken-corn-and-noodle-soup.jpeg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Nice'
          },
          {
             _id:2,
             name:'Pesto salmon and veggies-in-foil',
             image:'images/pesto-salmon-and-italian-veggies-in-foil-srgb.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Good'
          },
          {
             _id:3,
             name:'Fruit Bubble Tea',
             image:'images/Fruit bubble tea.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Great'
          },
          {
             _id:4,
             name:'Rich Chicken Stew',
             image:'images/Rich Chicken Stew.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
             _id:5,
             name:'KoreanBeef',
             area: 'Asian',
             image:'images/KoreanBeef.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          }
          ];

          homefac.getRecipes = function (){
            return recipes;

          };

          homefac.getRecipe = function (){
            return recipes[index];
          };

        return homefac;

      });
