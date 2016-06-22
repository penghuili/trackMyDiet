var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    kcal: [Number],
    fat: [String],
    glutenfree: [Boolean],
    vegan: [Boolean],
    vegetarian: [Boolean],
    halal: [Boolean],
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