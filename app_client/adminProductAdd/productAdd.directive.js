angular
    .module('trackmydietApp')
    .directive("productAdd", productAdd);

function productAdd() {
    return {
        templateUrl : "adminProductAdd/productAdd.view.html",
        controller: "productAddCtrl as productaddvm"
    };
}