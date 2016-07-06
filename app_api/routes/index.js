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

router.get('/dietPrograms', ctrlDietPrograms.getDietPrograms);
router.get('/dietPrograms/:dietprogramid', ctrlDietPrograms.getDietProgramById);
router.post('/dietProgram', auth, ctrlDietPrograms.dietProgramCreate);

router.get('/products', ctrlProducts.getProducts);
router.get('/products/:id', ctrlProducts.getProductById);
router.get('/products/diet/:dietName', ctrlProducts.getProductsByDietProgramName);
router.post('/product', auth, ctrlProducts.productCreate);

router.get ('/shops/:shopid', ctrlShops.getShopById);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.post('/diaries',auth, ctrlDiaries.getDiaries);
router.post('/diary/add', auth, ctrlDiaries.diaryCreate);
router.post('/diary/plan', auth, ctrlMealPlans.mealPlanCreate);

module.exports = router;
