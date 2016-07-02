var mongoose = require( 'mongoose' );

var breakfastSchema = ({
  food: String,
  amount: Number
});

var lunchSchema = ({
  food: String,
  amount: Number
});

var dinnerSchema = ({
  food: String,
  amount: Number
});

var snackSchema = ({
  food: String,
  amount: Number
});

var mealplanItemSchema = ({
  date: Number,
  breakfast:[breakfastSchema],
  lunch: [lunchSchema],
  dinner: [dinnerSchema],
  snack: [snackSchema]
});

var mealplanSchema = new mongoose.Schema({
    email: String,
    mealplans: [mealplanItemSchema]
});

mongoose.model('MealPlan', mealplanSchema);
