var mongoose = require('mongoose');
var MealPlan = mongoose.model('MealPlan');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.mealPlanCreate = function(req, res) {
  getUser(req, res, function (req, res, userEmail) {
  if (userEmail) {
    MealPlan
      .findOne({email:userEmail})
      .exec(
        function(err, mealPlan) {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            console.log(mealPlan);
            doAddMealPlan(req, res, mealPlan, userEmail);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, "please login");
  }
  });
};

var getUser = function(req, res, callback) {
  console.log("Finding author with email " + req.payload.email + " ...");
  if (req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user) {
        if (!user) {
          sendJSONresponse(res, 404, "User not found");
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(user);
        callback(req, res, user.email);
      });

  } else {
    sendJSONresponse(res, 404, "User not found");
    return;
  }

};

var doAddMealPlan = function(req, res, mealPlan, userEmail) {
  if (!mealPlan) {
    sendJSONresponse(res, 404, "meal plan not found");
  } else {
    mealPlan.mealplans.push({
      date: req.body.date,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner,
      snack: req.body.snack
    });
    mealPlan.save(function(err, mealPlan) {
      var thisPlan;
      if (err) {
        console.log(err);
        sendJSONresponse(res, 400, err);
      } else {
        thisPlan = mealPlan.mealplans[mealPlan.mealplans.length - 1];
        console.log(thisPlan);
        console.log(mealPlan);
        sendJSONresponse(res, 201, thisPlan._id);
      }
    });
  }
};
