'use strict';

angular.module('eatinghealthyApp')
        .factory('homeFactory', function() {

          var homefac = {};
          var recipes=[
            {
             _id:0,
             name:'Breakfast Grilled Cheese Tocas',
             area: 'America',
             image:'images/Breakfast Grilled Cheese Tocas.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Fine'
          },
          {
             _id:1,
             name:'Asian-chicken-corn-and-noodle-soup',
             area: 'Asianfood',
             image:'images/asian-chicken-corn-and-noodle-soup.jpeg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Nice'
          },
          {
             _id:2,
             name:'Pesto salmon and veggies-in-foil',
             area: 'America',
             image:'images/pesto-salmon-and-italian-veggies-in-foil-srgb.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Good'
          },
          {
             _id:3,
             name:'Fruit Bubble Tea',
             area: 'Asianfood',
             image:'images/Fruit bubble tea.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: 'Great'
          },
          {
             _id:4,
             name:'Rich Chicken Stew',
             area: 'Europe',
             image:'images/Rich Chicken Stew.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
             _id:5,
             name:'KoreanBeef',
             area: 'Asianfood',
             image:'images/KoreanBeef.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
             _id:6,
             name:'Shrimp-Pho-Soup',
             area: 'Asianfood',
             image:'images/Easy-Pho-Recipe-a-homemade-shrimp-pho-soup.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
             _id:7,
             name:'Barbecue-pork-steamed-buns',
             area: 'Asianfood',
             image:'images/barbecue-pork-steamed-buns.jpeg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
             _id:8,
             name:'Avocado-shrimp-zoodle',
             area: 'America',
             image:'images/Avocado-shrimp-zoodle.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
            _id:9,
             name:'Baked-Mustard-Crusted-Salmon-Asparagus-Tarragon',
             area: 'America',
             image:'images/baked-mustard-crusted-salmon-asparagus-tarragon.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
            _id:10,
             name:'Asparagus Salad with egg and Janbom de Bayonne',
             area: 'Europe',
             image:'images/Asparagus Salad with egg and Janbom de Bayonne.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
            _id:11,
             name:'Lemony-roasted-salmon-with-white-wine-couscous',
             area: 'Europe',
             image:'images/lemony-roasted-salmon-with-white-wine-couscous.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          },
          {
            _id:12,
             name:'Creamy avocado and White Bean Wrap',
             area: 'Europe',
             image:'images/Creamy avocado and White Bean Wrap.jpg',
             ingredients:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
             directions:'',
             comment: ''
          }
          ];

          homefac.getRecipes = function (){
            return recipes;

          };

          homefac.getRecipe = function (index){
            return recipes[index];
          };

        return homefac;

      });
