angular
  .module('trackmydietApp')
  .controller('diaryAddCtrl', diaryAddCtrl);

function diaryAddCtrl () {
  var vm = this;
  vm.pageHeader = "Add Diary";
}