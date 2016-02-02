'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
    'ngRoute'/*,
     'myApp.dashboard',
     'myApp.view2',
     'myApp.version'*/
])
app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    /*$httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";*/


    $routeProvider.
    when('/dashboard', {
        templateUrl: 'deals/deals.html',
        controller: 'DashboardCtrl'
    }).when('/deals', {
        templateUrl: 'deals/deals.html',
        controller: 'DealsCtrl'
    }).when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View1Ctrl'
    }).otherwise({redirectTo: '/dashboard'});
}]);

app.run(function(){

})