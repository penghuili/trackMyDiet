angular
    .module('trackmydietApp')
    .controller('productAddCtrl', productAddCtrl);

function productAddCtrl () {
    var vm = this;
    vm.pageHeader =  "Add products";
    vm.pageContent = "";


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


}