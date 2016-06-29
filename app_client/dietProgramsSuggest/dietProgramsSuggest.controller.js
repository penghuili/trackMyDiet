angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

function dietProgramsSuggestCtrl ($scope, $location) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
  vm.submitProgram = function() {
      
      $location.path("dietPrograms/suggest/result");
  };
}
