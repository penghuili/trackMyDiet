angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestResultCtrl', dietProgramsSuggestResultCtrl);

function dietProgramsSuggestResultCtrl () {
  var vm = this;
  vm.pageHeader =  "This Best Diet Program for you is:";
  vm.id = localStorage.getItem("id");
  vm.dietProgram = localStorage.getItem("name");

}
