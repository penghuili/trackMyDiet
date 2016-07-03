angular
  .module('trackmydietApp')
  .directive("productsSidebar", productsSidebar);

function productsSidebar() {
    return {
        templateUrl : "/common/directives/productsSidebar/productsSidebar.view.html"
    };
}