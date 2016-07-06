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
      .findOne({email:userEmail})
      .exec(
        function(err, diary) {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            console.log(diary);
            doAddDiary(req, res, diary, userEmail);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, "please login");
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

var doAddDiary = function(req, res, diary, userEmail) {
  if (!diary) {
    sendJSONresponse(res, 404, "diary not found");
  } else {
    var len = diary.diaries.length;
    if(len > 0 && diary.diaries[len - 1]["createdOn"] === req.body.createdOn) {
      diary.diaries[len - 1].meals.push({
        meal: req.body.meals.meal,
        food: req.body.meals.food
      });
    } else {
      diary.diaries.push({
        createdOn: req.body.createdOn,
        meals:[{
          meal: req.body.meals.meal,
          food: req.body.meals.food
        }]
      });
    }
    diary.save(function(err, diary) {
      var thisDiary;
      if (err) {
        console.log(err);
        sendJSONresponse(res, 400, err);
      } else {
        console.log(diary);
        thisDiary = diary.diaries[diary.diaries.length - 1];
        sendJSONresponse(res, 201, thisDiary._id);
      }
    });
  }
};


module.exports.getDiaries = function(req, res) {
  getUser(req, res, function (req, res, userEmail) {
  if (userEmail) {
    Diary
      .findOne({email:userEmail})
      .exec(
        function(err, diary) {
          if (err) {
            sendJSONresponse(res, 400, err);
          } else {
            console.log(diary);
            sendJSONresponse(res, 201, diary.diaries);
          }
        }
    );
  } else {
    sendJSONresponse(res, 404, "please login");
  }
  });
};
