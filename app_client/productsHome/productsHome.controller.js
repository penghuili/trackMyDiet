angular
    .module('trackmydietApp')
    .controller('productsHomeCtrl', productsHomeCtrl);

function productsHomeCtrl () {
    var vm = this;
    vm.pageHeader =  "Products";
}
