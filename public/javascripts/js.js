$(function() {
	var moreFoodBtn = $("#addMoreFood");
	var submitFood = $("#submitFood");
	var i = 2;
	moreFoodBtn.on("click",function add() {
		var div = $("<div></div>").addClass("form-group");
		var labelFood = $("<label class=col-md-2>I have eaten: </label>").attr("for", "food"+ i );
		var divFood = $("<div class=col-md-2></div>");
		var inputFood = $("<input class=form-control></input>").attr("id", "food" + i);
		divFood.html(inputFood);
		var labelAmount = $("<label class=col-md-2>And how many: </label>").attr("for", "amount" + i);
		var divAmount = $("<div class=col-md-2></div>");
		var inputAmount = $("<input class=form-control></input>").attr("id", "amount" + i);
		divAmount.html(inputAmount);
		var btn = $("<button type=button class=btn btn-default btn-sm id=addMoreFood></button>");
		btn.html("<span class=glyphicon glyphicon-plus></span> More");

		div.append([labelFood, divFood, labelAmount, divAmount, btn]);
		submitFood.before(div);
		moreFoodBtn.remove();
		i++;
		moreFoodBtn = $("#addMoreFood");
		moreFoodBtn.on("click", add);
	});

	// $("#datetimepicker").datetimepicker({
	//   format:'d.m.Y H:i',
	//   inline:true,
	//   lang:'en'
	// });

	var ageInput = $("#age");
	ageInput.on("keyup", function() {
		var v = Number(ageInput.val());
		if(ageInput.val() === ""){
			ageInput.next().remove();
			ageInput.css("border", "none");
		}else if(Number.isNaN(v)) {
			ageInput.css("border", "1px solid red");
			if(ageInput.next().html() === undefined){
			    ageInput.after("<span style=color:red;>only numbers.</span>");
		    }
		}
	});
});
