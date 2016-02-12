define([
  'app'
], function (app) {
  'use strict';

  return app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider

        // home state
        .state('home', {
          url: '/',
          templateUrl: 'app/views/pages/home.html'
        })

      $locationProvider
        .html5Mode(true)
        .hashPrefix('!');
    }
  ]);

});
