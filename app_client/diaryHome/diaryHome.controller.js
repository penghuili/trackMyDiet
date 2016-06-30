angular
  .module('trackmydietApp')
  .controller('diaryHomeCtrl', diaryHomeCtrl);

function diaryHomeCtrl () {
  var vm = this;
  vm.pageHeader =  "Diet Programs";
  vm.pageContent = "Here you can keep your diet diary, plan your meal week plan and get health analysis!";

}