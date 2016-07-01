angular
    .module('trackmydietApp')
    .controller('productAddCtrl', productAddCtrl);

function productAddCtrl ($location, trackmydietData) {
    var vm = this;
    vm.pageHeader =  "Add products";
    vm.pageContent = "";
    vm.formError = "";
}
