define(["app"],function(e){"use strict";return e.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(e,o,r){o.otherwise("/home"),e.state("home",{url:"/",templateUrl:"app/views/pages/home.html",controller:"HomeController as home"}),r.html5Mode(!0).hashPrefix("!")}])});