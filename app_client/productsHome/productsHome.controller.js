angular
    .module('trackmydietApp')
    .controller('productsHomeCtrl', function ($scope, trackmydietData){

        var vm = this;
        vm.pageHeader =  "Products";

        trackmydietData.getAllProducts()
            .success(function(data) {
                $scope.products = data;
                console.log('products');
                console.log($scope.products);
        })
            .error(function (e) {
                vm.message = "Sorry, something's gone wrong, please try again later";
            });
            
});
