angular
  .module('trackmydietApp')
  .controller('diaryAddHomeCtrl', diaryAddHomeCtrl);

function diaryAddHomeCtrl () {
  var vm = this;
  vm.pageHeader =  "Keep Diet Diary";
  vm.pageContent = "";

}
