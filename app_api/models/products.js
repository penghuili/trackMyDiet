var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {type: String, required: true},
<<<<<<< HEAD
    brand: [String],
    image: [String],
    kcal: [Number],
    fat: [String],
    glutenfree: [Boolean],
    vegan: [Boolean],
    vegetarian: [Boolean],
    halal: [Boolean],
=======
    kcal: Number,
    fat: Number,
    glutenfree: Boolean,
    vegan: Boolean,
    vegetarian: Boolean,
    halal: Boolean,
>>>>>>> origin/adminPage
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