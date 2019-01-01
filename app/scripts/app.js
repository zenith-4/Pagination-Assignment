'use strict';

/**
 * @ngdoc overview
 * @name projectAjsApp
 * @description
 * # projectAjsApp
 *
 * Main module of the application.
 */
angular
  .module('Myapp', [
    
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
        
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
        
      })

      .otherwise({
        redirectTo: '/home'
      });
  });
