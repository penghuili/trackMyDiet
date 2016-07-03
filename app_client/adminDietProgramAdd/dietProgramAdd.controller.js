angular
    .module('trackmydietApp')
    .controller('dietProgramAddCtrl', dietProgramAddCtrl);

function dietProgramAddCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader = "Add Diet Program";
  vm.formError = "";
  vm.formData = {};

  vm.onSubmit = function() {
  	vm.formError = "";
    if (!vm.formData.name || !vm.formData.description) {
      vm.formError = "Name and description are required";
      return false;
    } else {
      console.log("in onSubmit");
      console.log(vm.formData.name);
      console.log(vm.formData.loseWeight);
      vm.doAddDietProgram(vm.formData);
      }
    };

  vm.doAddDietProgram = function (formData) {
      trackmydietData.addDietProgram(formData)
        .success(function (data) {
          vm.formError = data + " saved";
        })
        .error(function (data) {
          vm.formError = data;
        });
  };
}

var counter = 1;
var limit = 10;
function addInput(divName){
  if (counter == limit)  {
    alert("You have reached the limit of adding " + counter + " inputs");
  }
  else {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Food " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
    document.getElementById(divName).appendChild(newdiv);
    counter++;
  }
}

function addPicture(divName){
  if (counter == limit)  {
    alert("You have reached the limit of adding " + counter + " pictures");
  }
  else {
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Picture " + (counter + 1) + " <br><input name='picture' type='file' size='50' accept='image'>";
    document.getElementById(divName).appendChild(newdiv);
    counter++;
  }
}
