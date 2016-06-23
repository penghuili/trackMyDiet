angular
  .module('trackmydietApp')
  .controller('dietProgramsLinkProductsCtrl', dietProgramsLinkProductsCtrl);

function dietProgramsLinkProductsCtrl ($location, trackmydietData, authentication) {
  var vm = this;
  vm.pageHeader = "Link products to diet program";
}
