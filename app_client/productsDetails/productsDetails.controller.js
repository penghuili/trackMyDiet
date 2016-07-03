angular
    .module('trackmydietApp')
    .controller('productsDetailsCtrl', function ($scope, trackmydietData, $routeParams){
        
        $scope.dietPrograms = [];
        $scope.shops = [];

        trackmydietData.getProduct($routeParams.id)
            .success(function(data) {
                $scope.thisProduct = data;
                $scope.pageHeader = $scope.thisProduct.name;

                // TESTING 
                console.log('This product');
                console.log($scope.thisProduct);

                for(var i = 0; i < $scope.thisProduct.dietProgram.length; i++) {
                    trackmydietData.dietProgramById($scope.thisProduct.dietProgram[i])
                        .success(function (data) {
                            $scope.dietPrograms.push(data);

                            // TESTING
                            console.log('Diet programs');
                            console.log($scope.dietPrograms);
                        })
                        .error(function (e) {
                            $scope.message = "Sorry, diet programs are not found";
                        });
                }
                
                for(var j = 0; j < $scope.thisProduct.shopInfo.length; j++) {
                    trackmydietData.getShop($scope.thisProduct.shopInfo[j])
                        .success(function (data) {
                            $scope.shops.push(data);

                            // TESTING
                            console.log('Shops');
                            console.log($scope.shops);
                        })
                        .error(function (e) {
                            $scope.message = "Sorry, shops are not found";
                        });
                }
            })
            .error(function (e) {
                $scope.message = "Sorry, something's gone wrong, please try again later";
            });

        $scope.reverse = true;
        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
    });