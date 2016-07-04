var mongoose = require('mongoose');

var dietProgramSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {
        type: String,
        required: true
    },
    picture: String,
    loseWeight: Boolean,
    buildingMuscle: Boolean,
    keepShape: Boolean,
    beBeautiful: Boolean,
    ageMin: Number,
    ageMax: Number,
    BMImin: Number,
    BMImax: Number,
    foodAllowed: [String],
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
