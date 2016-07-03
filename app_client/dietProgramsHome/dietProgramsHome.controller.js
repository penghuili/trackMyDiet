angular
  .module('trackmydietApp')
  .controller('dietProgramsHomeCtrl', dietProgramsHomeCtrl);

function dietProgramsHomeCtrl () {
  var vm = this;
  vm.pageHeader =  "Diet Programs";
  vm.pageContent = "You already tried different diets, but you did not see any success? You have eaten less but you just would not loose the weight you wanted?"
  vm.pageContent2 = "Track My Diet offers 3 diets that you've probably never tried before and that might help you lose that extra weight.";
  vm.img = "/bootstrap/img/logo.png";
}
