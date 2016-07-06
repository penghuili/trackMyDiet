angular
  .module('trackmydietApp')
  .controller('diaryMealPlanCtrl', diaryMealPlanCtrl);

function diaryMealPlanCtrl (trackmydietData) {

  var vm = this;
  vm.pageHeader = "Plan your week meal";
  vm.formData = {};
  vm.breakfastCount = 2;
  vm.lunchCount = 2;
  vm.dinnerCount = 2;
  vm.snackCount = 2;

  vm.onSubmit = function() {
    var breakfastArr = [];
    var lunchArr = [];
    var dinnerArr = [];
    var snackArr = [];
    var date = new Date(vm.date).getTime();
    vm.formData.date = date;
    vm.formData.breakfast = vm.getInput("breakfast", breakfastArr);
    vm.formData.lunch = vm.getInput("lunch", lunchArr);
    vm.formData.dinner = vm.getInput("dinner", dinnerArr);
    vm.formData.snack = vm.getInput("snack", snackArr);

    vm.formError = "";
    vm.doAddMealPlan(vm.formData);
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

  vm.getInput = function(meal, foodArr) {
    var count = vm[meal + "Count"];
    for(var i = 1; i < count; i++) {
      var food = $("#" + meal + "-food" + i).val();
      var amount = $("#" + meal + "-amount" + i).val();
      foodArr.push({food: food, amount: amount});
    }
    vm[meal + "Count"] = 2;
    return foodArr;
  };

  vm.addInput = function(meal) {
    var count = vm.getCount(meal);
    var $beforeBtn = $("#" + meal + "-food" + (count - 1)).parent().parent();
    var $addMoreBtn = $("#" + meal +"Add");
    var $div = vm.createContent(meal, count);
    var $btn = vm.createButton(meal);
    $btn.on("click", function add() {
      var count = vm.getCount(meal);
      var $beforeBtn = $("#" + meal + "-food" + (count - 1)).parent().parent();
      var $div = vm.createContent(meal, count);
      var $btn = vm.createButton(meal);
      $btn.on("click", add);
      $div.append($btn);
      $beforeBtn.after($div);
      $(this).remove();
    });
    $div.append($btn);
    $beforeBtn.after($div);
    $addMoreBtn.remove();
  };

  vm.getCount = function(meal) {
    var count;
    switch (meal) {
      case 'breakfast':
        count = vm.breakfastCount;
        vm.breakfastCount++;
        console.log(vm.breakfastCount);
        break;
      case 'lunch':
        count = vm.lunchCount;
        vm.lunchCount++;
        break;
      case 'dinner':
        count = vm.dinnerCount;
        vm.dinnerCount++;
        break;
      case 'snack':
        count = vm.snackCount;
        vm.snackCount++;
        break;
    }
    return count;
  };
  vm.createContent = function(meal, count) {
    var $div = $("<div></div>").addClass("form-group");
    var $labelFood = $("<label class='col-md-2'>I will eat: </label>")
      .attr("for", meal + "-food"+ count);
    var $divFood = $("<div class=col-md-2></div>");
    var $inputFood = $("<input type='text' class='form-control' required></input>")
      .attr("id", meal + "-food"+ count);
    $divFood.html($inputFood);
    var $labelAmount = $("<label class='col-md-2'>And how many: </label>")
      .attr("for", meal + "-amount"+ count);
    var $divAmount = $("<div class='col-md-2'></div>");
    var $inputAmount = $("<input type='text' class='form-control' required></input>")
      .attr("id", meal + "-amount"+ count);
    $divAmount.html($inputAmount);
    $div.append([$labelFood, $divFood, $labelAmount, $divAmount]);

    return $div;
  };

  vm.createButton = function(meal) {
    var $btn = $("<button type=button class='btn btn-default btn-sm'></button>")
      .attr("id", meal + "Add");
    $btn.html("<span class='glyphicon glyphicon-plus'></span> More");

    return $btn;
  };
}
