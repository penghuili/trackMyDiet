var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: [String],
    image: [String],
    kcal: [Number],
    fat: [String],
    glutenfree: [Boolean],
    vegan: [Boolean],
    vegetarian: [Boolean],
    halal: [Boolean],
    dietProgram: [{type: mongoose.Schema.Types.ObjectId, ref: 'DietProgram'}],
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