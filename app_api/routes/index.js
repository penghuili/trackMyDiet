var express = require('express');
var router = express.Router();
var ctrlDietPrograms = require('../controllers/dietPrograms');
var ctrlAuth = require('../controllers/authentication');
//var ctrlProducts = require('../controllers/products');
var ctrlDiarys = require('../controllers/diaries');
var jwt = require('express-jwt');
var auth = jwt({
secret: process.env.JWT_SECRET,
userProperty: 'payload'
});

//get and post diet programs
router.get('/dietPrograms', ctrlDietPrograms.dietProgramsList);
router.get('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsReadOne);

//get and post products
//router.post('/products', ctrlProducts.productCreate);
// router.post('/products/add', ctrlProducts.productCreate);

//register and login
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//get and post diary
router.post('/diary/add', auth, ctrlDiarys.diaryCreate);


module.exports = router;
