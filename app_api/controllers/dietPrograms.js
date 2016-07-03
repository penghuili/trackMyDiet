var mongoose = require('mongoose');
var DietProgram = mongoose.model('DietProgram');
var User = mongoose.model("User");

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.dietProgramsList = function(req, res) {
  console.log('Finding diet program details', req.params);
  DietProgram
      .find().limit(5)
      .exec(function(err, dietPrograms) {
        if (!dietPrograms) {
          sendJSONresponse(res, 404, {
            "message": "diet programs not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(dietPrograms);
        sendJSONresponse(res, 200, dietPrograms);
      });
};

module.exports.dietProgramsReadOne = function(req, res) {
  console.log('Finding diet program details ' + req.params.dietprogramid);
  if (req.params && req.params.dietprogramid) {
    DietProgram
      .findById(req.params.dietprogramid)
      .exec(function(err, dietProgram) {
        if (!dietProgram) {
          sendJSONresponse(res, 404, {
            "message": "diet program id not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(dietProgram);
        sendJSONresponse(res, 200, dietProgram);
      });
  } else {
    console.log('No diet program id specified');
    sendJSONresponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.dietProgramCreate = function(req, res) {
    console.log("in dietprogramecreate");
  getUser(req, res, function (req, res, userName) {
  if (userName === "admin") {
      doAddDietProgram(req, res);
  } else {
    sendJSONresponse(res, 404, "You have no permission!");
  }
  });
};

var getUser = function(req, res, callback) {
  console.log("Finding admin ...");
  console.log(req.payload.email);
  if (req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user) {
        if (!user) {
          console.log("no user");
          sendJSONresponse(res, 404, "User not found");
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        } else if (user.name !== "admin") {
          console.log("This is not admin, this is " + user.name + ", email: " + user.email );
          sendJSONresponse(res, 404, "You have no permission!");
        }
        console.log(user);
        callback(req, res, user.name);
      });

  } else {
    sendJSONresponse(res, 404, "User not found");
    return;
  }

};

var doAddDietProgram = function(req, res) {
    var dietProgram = new DietProgram();
    dietProgram.name = req.body.name;
    dietProgram.description = req.body.description;
    dietProgram.loseWeight = req.body.loseWeight;
    dietProgram.buildingMuscle = req.body.buildingMuscle;
    dietProgram.keepShape = req.body.keepShape;
    dietProgram.beBeautiful = req.body.beBeautiful;
    dietProgram.ageMin = req.body.ageMin;
    dietProgram.ageMax = req.body.ageMax;
    dietProgram.BMImin = req.body.BMImin;
    dietProgram.BMImax = req.body.BMImax;
    dietProgram.loseWeight = req.body.loseWeight;
    dietProgram.buildingMuscle = req.body.buildingMuscle;
    dietProgram.keepShape = req.body.keepShape;
    dietProgram.beBeautiful = req.body.beBeautiful;
    dietProgram.foodAllowed = req.body.foodAllowed;

    dietProgram.save(function(err, dietProgram) {
      if (err) {
        console.log(err);
        sendJSONresponse(res, 400, err);
      } else {
        console.log(dietProgram);
        sendJSONresponse(res, 201, dietProgram.name);
      }
    });
};
