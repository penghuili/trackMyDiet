angular
  .module('trackmydietApp')
  .controller('homeCtrl', homeCtrl);

/*
function homeCtrl () {
  var vm = this;
  vm.pageHeader =  "Track My Diet";
}
*/

function homeCtrl($location, authentication) {

  var vm = this;
  vm.pageHeader =  "Track My Diet";


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
