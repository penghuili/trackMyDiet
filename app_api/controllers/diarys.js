var mongoose = require('mongoose');
var Diary = mongoose.model('Diary');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.diaryCreate = function(req, res) {
  getUser(req, res, function (req, res, userEmail) {
  if (userEmail) {
    Diary
      .findOne({email: userEmail})
      .exec(
        function(err, diary) {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            doAddDiary(req, res, diary, userEmail);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "please login"
    });
  }
  });
};

var getUser = function(req, res, callback) {
  console.log("Finding author with email " + req.payload.email);
  if (req.payload.email) {
    User
      .findOne({ email : req.payload.email })
      .exec(function(err, user) {
        if (!user) {
          sendJSONresponse(res, 404, {
            "message": "User not found"
          });
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
    sendJSONresponse(res, 404, {
      "message": "User not found"
    });
    return;
  }

};

var doAddDiary = function(req, res, diary, userEmail) {
  if (!diary) {
    sendJSONresponse(res, 404, "diary not found");
  } else {
    diary.diarys.push({
      meal: req.body.meal,
      food: req.body.food
    });
    diary.save(function(err, diary) {
      var thisDiary;
      if (err) {
        console.log(err);
        sendJSONresponse(res, 400, err);
      } else {
        thisDiary = diary.diarys[diary.diarys.length - 1];
        sendJSONresponse(res, 201, thisDiary);
      }
    });
  }
};