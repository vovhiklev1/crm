'use strict';

app.controller('DealsCtrl', function ($scope, DataFactory, SettingsAppFactory, $timeout) {
    console.log('DealsCtrl');
    //  DataFactory.setDeals();
    //  var settings = SettingsAppFactory;
    //  var deals = DataFactory.getDeals();
    //  $scope.deals = deals;

    DataFactory.setDeals();

    var deals = DataFactory.getDeals();
    $scope.deals = deals;

    $scope.init = function () {
        DataFactory.setDeals();

        var deals = DataFactory.getDeals();
        $scope.deals = deals;
        alert('c ' + deals.length)
    };

    angular.element(document).ready($scope.init);

});
