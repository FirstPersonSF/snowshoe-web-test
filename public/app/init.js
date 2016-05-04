define([
  'angular',
  'app',
  'app-routes',
  'HomeController'
], function (angular) {
  'use strict';

  return require([
    'domReady!',
    'bootstrap'
  ], function (document) {
    angular.bootstrap(document, ['app']);
  });
});
