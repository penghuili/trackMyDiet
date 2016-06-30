var mongoose = require( 'mongoose' );

var diarySchema = new mongoose.Schema({
    createdOn: {
        type: Date,
        "default": Date.now
    },
    meal: String,
    food: [{String:Number}]
});

mongoose.model('Diary', diarySchema);