angular
    .module('trackmydietApp')
    .controller('productAddCtrl', productAddCtrl);

productAddCtrl.$inject = ['$location', 'trackmydietData', '$scope'];

function productAddCtrl ($location, trackmydietData, $scope) {
    var vm = this;
    vm.pageHeader =  "Add products";
    vm.pageContent = "";

    // $scope.create = function() {
    //     var product = new Product({
    //         name: this.name
    //     });
    //
    //     product.$save(function(response) {
    //         $location.path('/products');
    //     });

    vm.productDetail = {
        name: "",
        kcal: "",
        fat: "",
        glutenfree: "",
        vegan: "",
        vegetarian: "",
        halal: "",
        dietProgram: "",
        createdOn: "",
        updatedOn: ""
    };

        // vm.productDetail = new Product({
        //     name: this.name
        // });


        vm.onSubmit = function () {
        vm.formError = "";
        if (!vm.productDetail.name) {
            vm.formError = "Name field required, please try again";
            return false;
        } else {
            vm.doAddProduct(vm.productDetail);
        }
    };

    vm.doAddProduct = function(productDetail) {
        vm.formError = "";
        trackmydietData
            .addProduct({name: productDetail.name})
            .error(function(err){
                vm.formError = err;
            })
            .then(function(){
                $location.search('page', null);
                $location.path(vm.returnPage);
            });
    };


            // $scope.product = new Product();
            // $scope.save = function() {
            //     $scope.product.$save()
            //         .then(function(){
            //             $rootScope.$broadcast('movieCreated', $scope.product);
            //         })
            // };
            //
            //
    


    trackmydietData.dietPrograms()
        .success(function(data) {
            vm.data = { dietPrograms: data };
        })
        .error(function (e) {
            vm.message = "Sorry, something's gone wrong, please try again later";
        });

        $scope.selection=[];
        // toggle selection for a given employee by name
        $scope.toggleSelection = function toggleSelection(employeeName) {
            var idx = $scope.selection.indexOf(employeeName);

            // is currently selected
            if (idx > -1) {
                $scope.selection.splice(idx, 1);
            }

            // is newly selected
            else {
                $scope.selection.push(employeeName);
            }
        };

}