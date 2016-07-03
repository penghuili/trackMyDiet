var mongoose = require('mongoose');

var shopInformationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true},
    // product: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    price: Number,
    link: String
});

mongoose.model('ShopInformation', shopInformationSchema);
