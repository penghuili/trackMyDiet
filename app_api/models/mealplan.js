var mongoose = require( 'mongoose' );

var mealplanSchema = new mongoose.Schema({
    date: Date,
    breakfast: [{String:Number}],
    snack: [{String:Number}],
    lunch: [{String:Number}],
    dinner: [{String:Number}]
});

mongoose.model('Mealplan', mealplanSchema);