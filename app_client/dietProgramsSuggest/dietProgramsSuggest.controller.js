angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

function dietProgramsSuggestCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
  trackmydietData.dietPrograms()
      .success(function(data) {
        vm.data = { dietPrograms: data };
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });
}
