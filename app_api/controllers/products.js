var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var User = mongoose.model("User");

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.productCreate = function(req, res) {
    console.log("in productcreate");
    getUser(req, res, function (req, res, userName) {
        if (userName === "admin") {
            doAddProduct(req, res);
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

var doAddProduct = function(req, res) {
    var product = new Product();
    product.name = req.body.name;
    product.kcal = req.body.kcal;

    product.save(function(err, product) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(product);
//            sendJSONresponse(res, 201, product.name);
            sendJSONresponse(res, 201, "mark");

        }
    });
};
