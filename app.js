'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngRoute'/*,
     'myApp.view1',
     'myApp.view2',
     'myApp.version'*/
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/view1', {
        templateUrl: 'view2/view2.html',
        controller: 'View1Ctrl'
    }).when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View1Ctrl'
    }).
    when('/deals', {
        templateUrl: 'deals/deals.html',
        controller: 'DealsCtrl'
    }).otherwise({redirectTo: '/view1'});
}]);
