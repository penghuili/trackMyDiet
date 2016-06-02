angular
  .module('trackmydietApp')
  .controller('dietProgramsHomeCtrl', dietProgramsHomeCtrl);

function dietProgramsHomeCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader =  "Diet Programs";
  vm.pageContent = "Here you can hava a test to know which diet program suits you. And you can of course browse all the programs.";
  trackmydietData.dietPrograms()
      .success(function(data) {
        vm.data = { dietPrograms: data };
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
}
