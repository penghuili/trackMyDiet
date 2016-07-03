angular
    .module('trackmydietApp')
    .controller('productAddCtrl', productAddCtrl);

function productAddCtrl (trackmydietData) {
    var vm = this;
    vm.pageHeader = "Add Product";
    vm.formError = "";
    vm.formData = {};

    vm.onSubmit = function() {
        vm.formError = "";
        if (!vm.formData.name) {
            vm.formError = "Name is required";
            return false;
        } else {
            console.log("in onSubmit");
            console.log(vm.formData.name);
            vm.doAddProduct(vm.formData);
        }
    };

    vm.doAddProduct = function (formData) {
        console.log("doAddProduct");
        trackmydietData.addProduct(formData)
            .success(function (data) {
                vm.formError = data + " saved";
            })
            .error(function (data) {
                vm.formError = data;
            });
    };

}
