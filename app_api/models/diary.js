var mongoose = require('mongoose');

var diaryFoodSchema = new mongoose.Schema({
    name: String,
    amount: Number
});

var diaryMealSchema = new mongoose.Schema({
  meal: String,
  food: [diaryFoodSchema]
});

var diaryDaySchema = new mongoose.Schema({
    createdOn: String,
    meals: [diaryMealSchema]
});

var diarySchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	diaries: [diaryDaySchema]
});

mongoose.model('Diary', diarySchema);
