'use strict';


// Declare app level module which depends on filters, and services
angular.module('stuffles', ['stuffles.filters', 'stuffles.services', 'stuffles.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/landing', {templateUrl: 'partials/landing.html', controller: MyCtrl1});
    $routeProvider.when('/product', {templateUrl: 'partials/product.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
