var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var User = mongoose.model("User");

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getProducts = function(req, res) {
  console.log('Finding products ...');
  Product
      .find()
      .exec(function(err, products) {
        if (!products) {
          sendJSONresponse(res, 404, "diet programs not found");
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(products);
        sendJSONresponse(res, 200, products);
      });
};

module.exports.getProductById = function(req, res) {
  console.log('Finding product details for ' + req.params.id + " ...");
  if (req.params && req.params.id) {
    Product
      .findById(req.params.id)
      .exec(function(err, product) {
        if (!product) {
          sendJSONresponse(res, 404, "product not found");
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(product);
        sendJSONresponse(res, 200, product);
      });
  } else {
    console.log('No product id specified');
    sendJSONresponse(res, 404, "No product id in request");
  }
};

module.exports.getProductsByDietProgramName = function(req, res) {
  console.log('Finding products for ' + req.params.dietName + " ...");
  if (req.params && req.params.dietName) {
    Product
      .find({dietPrograms: req.params.dietName})
      .exec(function(err, products) {
        if (!products) {
          sendJSONresponse(res, 404, "products not found");
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(products);
        sendJSONresponse(res, 200, products);
      });
  } else {
    console.log('No diet program name specified');
    sendJSONresponse(res, 404, "No diet program name in request");
  }
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
    product.brand = req.body.brand;
    product.picture = req.body.picture;
    product.kcal = req.body.kcal;
    product.fat = req.body.fat;
    product.glutenfree = req.body.glutenfree;
    product.vegan = req.body.vegan;
    product.vegetarian = req.body.vegetarian;
    product.halal = req.body.halal;
    product.dietPrograms = req.body.dietPrograms;

    product.save(function(err, product) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(product);
            sendJSONresponse(res, 201, "success");
        }
    });
};
