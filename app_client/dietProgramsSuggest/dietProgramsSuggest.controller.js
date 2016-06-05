angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

function dietProgramsSuggestCtrl ($location, trackmydietData, authentication) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
}
