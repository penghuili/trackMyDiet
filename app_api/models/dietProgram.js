var mongoose = require('mongoose');

var dietProgramSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {
        type: String,
        required: true
    },
    loseWeight: Boolean,
    buildingMuscle: Boolean,
    keepShape: Boolean,
    beBeautiful: Boolean,
    ageMin: Number,
    ageMax: Number,
    BMImin: Number,
    BMImax: Number,
    pictures:[Buffer],
    foodAllowed: [String],
    recipe: [String],
    createdOn: {
        type: Date,
        "default": Date.now
    },
    updatedOn: {
        type: Date,
        "default": Date.now
    }
});


mongoose.model('DietProgram', dietProgramSchema);
