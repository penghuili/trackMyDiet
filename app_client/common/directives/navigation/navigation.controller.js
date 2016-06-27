  angular
    .module('trackmydietApp')
    .controller('navigationCtrl', navigationCtrl);

  function navigationCtrl($location, authentication) {
    var vm = this;
    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.isAdmin = authentication.isAdmin();

    vm.logout = function() {
      authentication.logout();
      $location.path('/');
    };
  }
