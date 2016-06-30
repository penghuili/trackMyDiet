angular
  .module('trackmydietApp')
  .controller('diaryAddCtrl', diaryAddCtrl);

function diaryAddCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader = "Add Diary";

  vm.onSubmit = function() {
  vm.formData = {
    meal: vm.meal,
    food: [{
      name: vm.food1,
      amount: Number(vm.amount1)
    }]
  };
  	vm.formError = "";
    if (!vm.meal || !vm.food1 || !vm.amount1) {
      vm.formError = "All fields required, please try again";
      return false;
    } else {
      console.log(vm.formData.food[0]);
      vm.doAddDiary(vm.formData);
      }
    };

  vm.doAddDiary = function (formData) {
    console.log("get in doAddDiary");
      trackmydietData.addDiary({
        meal : formData.meal,
        food : formData.food
      })
        .success(function (data) {
          vm.formError = "saved";
        })
        .error(function (data) {
          vm.formError = "Your review has not been saved, please try again";
        });
  };
}