'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute'/*,
     'myApp.dashboard',
     'myApp.view2',
     'myApp.version'*/
])
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/dashboard', {
        templateUrl: 'deals/deals.html',
        controller: 'View1Ctrl'
    }).when('/deals', {
        templateUrl: 'deals/deals.html',
        controller: 'DealsCtrl'
    }).when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View1Ctrl'
    }).otherwise({redirectTo: '/dashboard'});
}]);
