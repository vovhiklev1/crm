'use strict';

app.controller('DealsCtrl', function ($scope, DataFactory, SettingsAppFactory) {
    console.log('DealsCtrl');
    DataFactory.setDeals();
    var deals = DataFactory.getDeals();
    $scope.deals = deals;

    var curr_list = 1;
    var curr_page = 1;
    var all = 100;
    var min = 0;
    var max = 7;
    var createDealsPage = function (page_count) {
        var list = [];
        for (var i = 0; i < all; i++) {
            list[i] = i + 1;
            console.log(i);
        }
        ;
        if (curr_page < 4) {
            min = 0;
            max = 7;
        };
        if (curr_page > all - 3) {
            min = curr_page - 3;
            max = all;
        };
        $scope.list = list.slice(min, max);
    };
    createDealsPage(1);

    var getPrev = function(){
        if (curr_page>2){
            curr_page--;
        }
    };
    var getNext = function(){
        if (curr_page<all){
            curr_page++;
        }
    }

    $scope.activePageIdx =2
});
