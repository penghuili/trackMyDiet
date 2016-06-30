angular
  .module('trackmydietApp')
  .controller('dietProgramDetailCtrl', dietProgramDetailCtrl);

function dietProgramDetailCtrl ($location, trackmydietData, authentication, $routeParams) {
  var vm = this;
   vm.dietprogramid = $routeParams.dietprogramid;
   
     trackmydietData.dietProgramById(vm.dietprogramid)
      .success(function(data2) {
        vm.data2 = {dietProgram: data2};
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });

}
