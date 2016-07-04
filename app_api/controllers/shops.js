var mongoose = require('mongoose');
var Shop = mongoose.model('ShopInformation');

module.exports.getShopById = function(req, res) {
  console.log('Finding shop details for ' + req.params.shopid + " ...");
  if (req.params && req.params.shopid) {
    Shop
      .findById(req.params.shopid)
      .exec(function(err, shop) {
        if (!shop) {
          sendJSONresponse(res, 404, "shop not found");
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(shop);
        sendJSONresponse(res, 200, shop);
      });
  } else {
    console.log('No shop id specified');
    sendJSONresponse(res, 404, "No shop id in request");
  }
};
