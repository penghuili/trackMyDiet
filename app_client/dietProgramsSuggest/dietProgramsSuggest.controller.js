angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

function dietProgramsSuggestCtrl () {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
}

