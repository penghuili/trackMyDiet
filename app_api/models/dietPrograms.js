var mongoose = require('mongoose');

var dietProgramSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {
        type: String,
        required: true
    },
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
