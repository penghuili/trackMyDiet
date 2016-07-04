  angular
    .module('trackmydietApp')
    .controller('dietProgramsSidebarCtrl', dietProgramsSidebarCtrl);

  function dietProgramsSidebarCtrl($location, trackmydietData, authentication) {
    var vm = this;
  vm.isLoggedIn = authentication.isLoggedIn();
  vm.currentPath = $location.path();

    trackmydietData.getDietPrograms()
      .success(function(data) {
        vm.data = { dietPrograms: data };
      })
      .error(function (e) {
        vm.message = "Sorry, something's gone wrong, please try again later";
      });

  }
