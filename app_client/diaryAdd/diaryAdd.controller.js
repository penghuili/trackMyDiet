angular
  .module('trackmydietApp')
  .controller('diaryAddCtrl', diaryAddCtrl);

function diaryAddCtrl (trackmydietData) {
  var vm = this;
  vm.pageHeader = "Add Diary";
  vm.formError = "";
  vm.food = {};
  vm.i = 2;

  vm.onSubmit = function() {
    var foodArr = [];
    for(var j = 1; j < vm.i; j++) {
      var food = $("#food"+j).val();
      var amount = $("#amount"+j).val();
      foodArr.push({name: food, amount: amount});
    }
    vm.formData = {
      meal: vm.meal,
      food: foodArr
    };
    	vm.formError = "";
      if (!vm.meal) {
        vm.formError = "All fields required, please try again";
        return false;
      } else {
        console.log(vm.formData.food[0]);
        vm.doAddDiary(vm.formData);
        }
    };

  vm.doAddDiary = function (formData) {
    console.log("get in doAddDiary");
      trackmydietData.addDiary(formData)
        .success(function (data) {
          vm.formError = data + " saved";
        })
        .error(function (data) {
          vm.formError = data;
        });
  };


  vm.addInput = function() {
    var $submitFoodBtn = $("#submitFood");
    var $addMoreFoodBtn = $("#addMoreFood");
    var $div = vm.createContent();
    var $btn = vm.createButton();
    $btn.on("click", function add() {
      var $submitFoodBtn = $("#submitFood");
      var $div = vm.createContent();
      var $btn = vm.createButton();
      $btn.on("click", add);
      $div.append($btn);
      $submitFoodBtn.before($div);
      $(this).remove();
    });
    $div.append($btn);
    $submitFoodBtn.before($div);
    $addMoreFoodBtn.remove();
  };

  vm.createContent = function() {
    var $div = $("<div></div>").addClass("form-group");
    var $labelFood = $("<label class='col-md-2'>I have eaten: </label>").attr("for", "food"+ vm.i );
    var $divFood = $("<div class=col-md-2></div>");
    var $inputFood = $("<input type='text' class='form-control'></input>")
      .attr("id", "food" + vm.i);
    $divFood.html($inputFood);
    var $labelAmount = $("<label class='col-md-2'>And how many: </label>").attr("for", "amount" + vm.i);
    var $divAmount = $("<div class='col-md-2'></div>");
    var $inputAmount = $("<input type='text' class='form-control ngmodel'></input>")
      .attr("id", "amount" + vm.i);
    $divAmount.html($inputAmount);
    $div.append([$labelFood, $divFood, $labelAmount, $divAmount]);

    vm.i++;
    return $div;
  };

  vm.createButton = function() {
    var $btn = $("<button type=button class='btn btn-default btn-sm' id='addMoreFood'></button>");
    $btn.html("<span class='glyphicon glyphicon-plus'></span> More");

    return $btn;
  };
}
