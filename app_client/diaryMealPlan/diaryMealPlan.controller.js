angular
  .module('trackmydietApp')
  .controller('diaryMealPlanCtrl', diaryMealPlanCtrl);

function diaryMealPlanCtrl (trackmydietData) {

  var vm = this;
  vm.pageHeader = "Plan your week meal";
  vm.formData = {};

  vm.onSubmit = function() {
    var date = new Date(vm.date).getTime();
    vm.formData.date = date;
    vm.formData.breakfast = [{food: vm.breakfast.food1, amount: vm.breakfast.amount1}];
    vm.formData.lunch = [{food: vm.lunch.food1, amount: vm.lunch.amount1}];
    vm.formData.dinner = [{food: vm.dinner.food1, amount: vm.dinner.amount1}];
    vm.formData.snack = [{food: vm.snack.food1, amount: vm.snack.amount1}];

    vm.formError = "";

    if (!vm.breakfast.food1 || !vm.breakfast.amount1) {
      vm.formError = "All fields required, please try again";
      return false;
    } else {
      console.log(vm.formData.breakfast[0].food);
      vm.doAddMealPlan(vm.formData);
      }
  };

  vm.doAddMealPlan = function (formData) {
      trackmydietData.addMealPlan(formData)
        .success(function (data) {
          vm.formError = data + " saved";
        })
        .error(function (data) {
          vm.formError = data;
        });
  };
}
