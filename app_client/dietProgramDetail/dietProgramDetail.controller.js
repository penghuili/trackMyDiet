angular
  .module('trackmydietApp')
  .controller('dietProgramDetailCtrl', dietProgramDetailCtrl);

function dietProgramDetailCtrl ($routeParams, trackmydietData) {
  var vm = this;
  var vm.dietprogramid = $routeParams.dietprogramid;
  trackmydietData.dietPrograms()
      .success(function(data) {
        vm.data.dietPrograms = data;
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });

  trackmydietData.dietProgramById(vm.dietprogramid)
      .success(function(data) {
        vm.data.theDietProgram = data;
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
}

