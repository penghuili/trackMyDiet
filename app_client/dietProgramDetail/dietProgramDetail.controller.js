angular
  .module('trackmydietApp')
  .controller('dietProgramDetailCtrl', dietProgramDetailCtrl);

function dietProgramDetailCtrl (trackmydietData, authentication, $routeParams) {
  var vm = this;
   vm.dietprogramid = $routeParams.dietprogramid;
     trackmydietData.dietProgramById(vm.dietprogramid)
      .success(function(data) {
        vm.data = {dietProgram: data};
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });

}
