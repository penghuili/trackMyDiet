angular
  .module('trackmydietApp')
  .controller('diaryMealPlanHomeCtrl', diaryMealPlanHomeCtrl);

function diaryMealPlanHomeCtrl () {
  var vm = this;
  vm.pageHeader =  "Plan your Diet";
  vm.pageContent = "";

}
