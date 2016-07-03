var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    picture: String,
    kcal: Number,
    fat: Number,
    glutenfree: Boolean,
    vegan: Boolean,
    vegetarian: Boolean,
    halal: Boolean,
    dietProgram: [{type: mongoose.Schema.Types.ObjectId, ref: 'DietProgram'}],
    shopInfo: [{type: mongoose.Schema.Types.ObjectId, ref: 'ShopInformation'}],
    createdOn: {
        type: Date,
        "default": Date.now
    },
    updatedOn: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model('Product', productSchema);
