'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'expvar',
  'angularTreeview',
  'ui.sortable',
  'ui.bootstrap.transition',
  'ui.bootstrap.modal',
  'ui.bootstrap.tabs'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/indexes/', {templateUrl: '/static/partials/index/list.html', controller: 'IndexesCtrl'});
  $routeProvider.when('/indexes/_new', {templateUrl: '/static/partials/index/new.html', controller: 'IndexNewCtrl'});
  $routeProvider.when('/indexes/:indexName', {templateUrl: '/static/partials/index/index.html', controller: 'IndexCtrl'});
  $routeProvider.when('/indexes/:indexName/:tabName', {templateUrl: '/static/partials/index/index.html', controller: 'IndexCtrl'});
  $routeProvider.when('/monitor/', {templateUrl: '/static/partials/monitor.html', controller: 'MonitorCtrl'});
  $routeProvider.otherwise({redirectTo: '/indexes'});
  $locationProvider.html5Mode(true);
}]).run(function($rootScope){
  //Just add a reference to some utility methods in rootscope.
  $rootScope.Utils = {
     keys : Object.keys
  }
});
