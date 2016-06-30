angular
  .module('trackmydietApp')
  .controller('diaryMealPlanCtrl', diaryMealPlanCtrl);

function diaryMealPlanCtrl () {
  var vm = this;
  vm.pageHeader = "Plan your week meal";
}