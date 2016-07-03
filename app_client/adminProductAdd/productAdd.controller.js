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

//     trackmydietData.dietPrograms()
//         .success(function(data) {
//             vm.data = { dietPrograms: data };
//         })
//         .error(function (e) {
//             vm.message = "Sorry, something's gone wrong, please try again later";
//         });
//
//     $scope.selection=[];
// // toggle selection for a given employee by name
//     $scope.toggleSelection = function toggleSelection(employeeName) {
//         var idx = $scope.selection.indexOf(employeeName);
//
//         // is currently selected
//         if (idx > -1) {
//             $scope.selection.splice(idx, 1);
//         }
//
//         // is newly selected
//         else {
//             $scope.selection.push(employeeName);
//         }
//     };


}
