'use strict';


// Declare app level module which depends on filters, and services
angular.module('stuffles', ['stuffles.filters', 'stuffles.services', 'stuffles.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/landing', {templateUrl: 'partials/landing.html', controller: ActivityStreamController});
    $routeProvider.when('/product', {templateUrl: 'partials/product.html', controller: ProductController});
    $routeProvider.otherwise({redirectTo: '/landing'});
  }]);
