var mongoose = require('mongoose');
var Shop = mongoose.model('ShopInformation');

exports.getShop = function(req, res) {
    Shop.findById(req.params.shopid, function(err, shop) {
        if(err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(shop);
    });
};