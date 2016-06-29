angular
  .module('trackmydietApp')
  .controller('dietProgramsHomeCtrl', dietProgramsHomeCtrl);

function dietProgramsHomeCtrl () {
  var vm = this;
  vm.pageHeader =  "Diet Programs";
  vm.pageContent = "Here you can have a test to know which diet program suits you. And you can of course browse all the programs.";

}
