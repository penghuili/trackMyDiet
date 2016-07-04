var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: String,
    picture: String,
    kcal: Number,
    fat: Number,
    glutenfree: Boolean,
    vegan: Boolean,
    vegetarian: Boolean,
    halal: Boolean,
    dietPrograms: [String],
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
