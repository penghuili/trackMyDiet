var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Diary = mongoose.model('Diary');
var MealPlan = mongoose.model("MealPlan");

var sendJSONresponse = function(res, status, content) {
res.status(status);
res.json(content);
};

module.exports.register = function(req, res) {
if(!req.body.name || !req.body.email || !req.body.password) {
sendJSONresponse(res, 400, {
"message": "All fields required"
});
return;
}
var user = new User();
user.name = req.body.name;
user.email = req.body.email;
user.setPassword(req.body.password);
user.save(function(err) {
var token;
if (err) {
sendJSONresponse(res, 404, err);
} else {
token = user.generateJwt();

var diary = new Diary();
diary.email = req.body.email;
diary.diaries = [];
diary.save(function(err) {
	if(err){
		sendJSONresponse(res, 404, err);
	}
});

var mealPlan = new MealPlan();
mealPlan.email = req.body.email;
mealPlan.mealplans = [];
mealPlan.save(function(err) {
	if(err){
		sendJSONresponse(res, 404, err);
	}
});

sendJSONresponse(res, 200, {
"token" : token
});
}
});
};

module.exports.login = function(req, res) {
if(!req.body.email || !req.body.password) {
sendJSONresponse(res, 400, {
"message": "All fields required"
});
return;
}
passport.authenticate('local', function(err, user, info){
var token;
if (err) {
sendJSONresponse(res, 404, err);
return;
}
if(user){
token = user.generateJwt();
sendJSONresponse(res, 200, {
"token" : token
});
} else {
sendJSONresponse(res, 401, info);
}
})(req, res);
};
