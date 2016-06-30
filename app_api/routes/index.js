var express = require('express');
var router = express.Router();
var ctrlDietPrograms = require('../controllers/dietPrograms');
var ctrlAuth = require('../controllers/authentication');
<<<<<<< HEAD
var ctrlProducts = require('../controllers/products');
=======
var ctrlDiarys = require('../controllers/diarys');
>>>>>>> e14448db6d4f1ef78c2d5d58890a7cf467095d72
var jwt = require('express-jwt');
var auth = jwt({
secret: process.env.JWT_SECRET,
userProperty: 'payload'
});


router.get('/dietPrograms', ctrlDietPrograms.dietProgramsList);
//router.post('/dietPrograms', ctrlDietPrograms.dietProgramsCreate);
router.get('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsReadOne);
//router.put('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsUpdateOne);
//router.delete('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/products', ctrlProducts.productCreate);

router.post('/diary/add', ctrlDiarys.diaryCreate);

module.exports = router;
