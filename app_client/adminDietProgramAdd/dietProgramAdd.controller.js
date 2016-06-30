angular
    .module('trackmydietApp')
    .controller('dietProgramAddCtrl', dietProgramAddCtrl);

function dietProgramAddCtrl ($scope) {
    var vm = this;
    vm.pageHeader =  "Add diet programs";
    vm.pageContent = "";

    // we will store our form data in this object
    $scope.formData = {};

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
