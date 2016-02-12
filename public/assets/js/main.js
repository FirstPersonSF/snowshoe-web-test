/* global require */
'use strict';

require.config({

  paths: {
    // libs
    jquery: '../libs/jquery/dist/jquery.min',
    bootstrap: '../libs/bootstrap/dist/js/bootstrap.min',
    underscore: '../libs/underscore/underscore-min',
    domReady: '../libs/requirejs-domready/domReady',

    // angular
    angular: '../libs/angular/angular',
    'angular-ui-router': '../libs/angular-ui-router/release/angular-ui-router.min',

    // app
    init: '../../app/init',
    app: '../../app/app',
    'app-routes': '../../app/app.routes',
  },

  shim: {
    // libs
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    underscore: {
      exports: '_'
    },

    // angular
    angular: {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-ui-router': {
      deps: ['angular']
    }
  },

  // set the app initializer as the only dependency
  deps: ['init']

});
