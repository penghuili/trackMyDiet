angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestResultCtrl', dietProgramsSuggestResultCtrl);

function dietProgramsSuggestResultCtrl () {
  var vm = this;
  vm.pageHeader =  "This Diet Program is best for you:";
  vm.pageContent = "HMR Program";

}
