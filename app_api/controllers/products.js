var mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.getAllProducts = function(req, res) {
    Product.find(function(err, products) {
        if(err) {
            res.status(500).send(err);
            return;
        }

        res.status(201).json(products);
    });
};

exports.getProduct = function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if(err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(product);
    });
};