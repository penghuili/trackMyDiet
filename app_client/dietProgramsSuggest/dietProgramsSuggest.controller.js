angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

<<<<<<< HEAD
function dietProgramsSuggestCtrl ($location) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
  vm.submitProgram = function() {
  	$location.path("/dietPrograms/suggest/result");
=======
function dietProgramsSuggestCtrl ($scope, $location) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
  vm.submitProgram = function() {
      
      $location.path("dietPrograms/suggest/result");
>>>>>>> maria
  };
}
