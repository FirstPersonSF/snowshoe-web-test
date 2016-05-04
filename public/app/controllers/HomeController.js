define([
  'app'
], function (app) {
  'use strict';


  return app.controller('HomeController', function ($rootScope, $scope, $state, $http) {
    console.log("Inside home");
    $http.get('/api/v1/stamp', {
        })
        .success(function (data) {
          console.log("Success");
        });

  });

});
