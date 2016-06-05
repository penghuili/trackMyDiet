angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

function dietProgramsSuggestCtrl ($location, trackmydietData, authentication) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
  trackmydietData.dietPrograms()
      .success(function(data) {
        vm.data = { dietPrograms: data };
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });

  vm.isLoggedIn = authentication.isLoggedIn();
  vm.currentPath = $location.path();
  vm.logout = function() {
    authentication.logout();
    $location.path('/');
  };
}
