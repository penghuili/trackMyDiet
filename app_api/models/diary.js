var mongoose = require('mongoose');

var diaryFoodSchema = new mongoose.Schema({
    name: String,
    amount: Number
});

var diaryItemSchema = new mongoose.Schema({
    createdOn: {
        type: Date,
        "default": Date.now
    },
    meal: String,
    food: [diaryFoodSchema]
});

var diarySchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	diarys: [diaryItemSchema]
});

mongoose.model('Diary', diarySchema);
