angular
    .module('trackmydietApp')
    .controller('productAddCtrl', productAddCtrl);

function productAddCtrl (trackmydietData) {
    var vm = this;
    vm.pageHeader = "Add Product";
    vm.formError = "";
    vm.formData = {};
    vm.formData.glutenfree = false;
    vm.formData.vegan = false;
    vm.formData.vegetarian = false;
    vm.formData.halal = false;

    trackmydietData.getDietPrograms()
      .success(function(data) {
        var dietProgramNames = [];
        data.forEach(function(value){
          var name = value.name;
          var nameForId = name.split(" ").join("");
          dietProgramNames.push({name: name, nameForId: nameForId});
        });
        vm.dietProgramNames = dietProgramNames;
      })
      .error(function(err) {
        vm.formError = "Something went wrong when getting diet program data";
      });

    vm.onSubmit = function() {
      vm.formData.dietPrograms = vm.getCheckedDietPrograms();
        vm.formError = "";
        if (!vm.formData.name) {
            vm.formError = "Name is required";
            return false;
        } else {
            console.log("in onSubmit");
            console.log(vm.formData.name);
            console.log(vm.formData.halal);
            console.log(vm.formData.dietPrograms[1]);
            vm.doAddProduct(vm.formData);
        }
    };

    vm.getCheckedDietPrograms = function () {
      var checked = [];
      vm.dietProgramNames.forEach(function(value) {
        var id = "#" + value.nameForId;
        if($(id).is(":checked") === true) {
          checked.push(value.name);
        }
      });
      return checked;
    };

    vm.doAddProduct = function (formData) {
        console.log("doAddProduct");
        trackmydietData.addProduct(formData)
            .success(function (data) {
                vm.formError = data + " saved";
            })
            .error(function (data) {
                vm.formError = data;
            });
    };
}
