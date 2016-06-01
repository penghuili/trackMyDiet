var mongoose = require('mongoose');
var Diet = mongoose.model('DietProgram');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.dietProgramsList = function(req, res) {
  console.log('Finding diet program details', req.params);
  Diet
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
  console.log('Finding diet program details', req.params);
  if (req.params && req.params.dietprogramid) {
    Diet
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
