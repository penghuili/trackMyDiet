angular
  .module('trackmydietApp')
  .controller('dietProgramDetailCtrl', dietProgramDetailCtrl);

function dietProgramDetailCtrl (trackmydietData, $routeParams) {
  var vm = this;
   vm.dietprogramid = $routeParams.dietprogramid;

   trackmydietData.getDietProgramById(vm.dietprogramid)
    .success(function(data) {
      vm.data = {dietProgram: data};

      trackmydietData.getProductsByDietProgramName(vm.data.dietProgram.name)
        .success(function(data) {
          vm.products = data;
        })
        .error(function (e) {
          vm.formError = "Sorry, something's gone wrong when getting related products";
        });
    })
    .error(function (e) {
      vm.formError = "Sorry, something's gone wrong when getting diet program data";
    });
}
