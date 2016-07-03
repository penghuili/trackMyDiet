var express = require('express');
var router = express.Router();
var ctrlDietPrograms = require('../controllers/dietPrograms');
var ctrlAuth = require('../controllers/authentication');
var ctrlShops = require('../controllers/shops');
var ctrlDiaries = require('../controllers/diaries');
var ctrlMealPlans = require('../controllers/mealPlans');
var ctrlProducts = require('../controllers/products');

var jwt = require('express-jwt');
var auth = jwt({
secret: process.env.JWT_SECRET,
userProperty: 'payload'
});

router.get('/dietPrograms', ctrlDietPrograms.dietProgramsList);

router.get('/products', ctrlProducts.getAllProducts);
router.get('/products/:id', ctrlProducts.getProduct);
router.get ('/shops/:shopid', ctrlShops.getShop);
//router.post('/dietPrograms', ctrlDietPrograms.dietProgramsCreate);
router.post('/dietPrograms', auth, ctrlDietPrograms.dietProgramCreate);
router.get('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsReadOne);
//router.put('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsUpdateOne);
//router.delete('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsDeleteOne);

router.post('/products', auth, ctrlProducts.productCreate);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
// router.post('/products', ctrlProducts.productCreate);

router.post('/diary/add', auth, ctrlDiaries.diaryCreate);

router.post('/diary/plan', auth, ctrlMealPlans.mealPlanCreate);

router.post('/products', auth, ctrlProducts.productCreate);

module.exports = router;
