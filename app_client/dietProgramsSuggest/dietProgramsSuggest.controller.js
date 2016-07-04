angular
  .module('trackmydietApp')
  .controller('dietProgramsSuggestCtrl', dietProgramsSuggestCtrl);

function dietProgramsSuggestCtrl (trackmydietData, $location) {
  var vm = this;
  vm.pageHeader = "Suggest Me A Diet";
  vm.formData = {};
  vm.onSubmit = function() {
    var userCondition = {};
    userCondition.age = Number(vm.formData.age);
    userCondition.bmi = Number(vm.formData.weight)/(Number(vm.formData.height)/100 * Number(vm.formData.height)/100);
    userCondition.loseWeight = vm.formData.loseWeight;
    userCondition.buildingMuscle = vm.formData.buildingMuscle;
    userCondition.keepShape = vm.formData.keepShape;
    userCondition.beBeautiful = vm.formData.beBeautiful;

    trackmydietData.getDietPrograms()
      .success(function(data){
        vm.score = data;
        vm.score.forEach(function(value) {
          value.score = 0;
          if(userCondition.age>=value.ageMin && userCondition.age<=value.ageMax){
            value.score += 10;
          }
          if(userCondition.bmi>=value.BMImin && userCondition.bmi<=value.BMImax){
            value.score += 10;
          }
          if(userCondition.loseWeight && value.loseWeight){
            value.score += 10;
          }
          if(userCondition.buildingMuscle && value.buildingMuscle){
            value.score += 10;
          }
          if(userCondition.keepShape && value.keepShape){
            value.score += 10;
          }
          if(userCondition.beBeautiful && value.beBeautiful){
            value.score += 10;
          }
        });

        var sortable = [];
        for (var i = 0, len = vm.score.length; i < len; i++){
          sortable.push([vm.score[i].name, vm.score[i]._id, vm.score[i].score]);
        }
        sortable.sort(function(a, b) {
          return b[2] - a[2];
        });

        localStorage.setItem("name", sortable[0][0]);
        localStorage.setItem("id", sortable[0][1]);
        console.log(sortable[0][2]);

        $location.path("/suggest/result/");
      }).error(function() {
        vm.formError = "Sorry, something's gone wrong when getting diet programs";
      });
  };
}
