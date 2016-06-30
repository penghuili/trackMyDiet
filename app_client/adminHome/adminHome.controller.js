angular
    .module('trackmydietApp')
    .controller('adminHomeCtrl', adminHomeCtrl);

function adminHomeCtrl () {
    var vm = this;
    vm.pageHeader =  "Admin area";
    vm.pageContent = "Here you can add products, diet programs etc.";

}
