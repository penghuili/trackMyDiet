var express = require('express');
var router = express.Router();
var ctrlDietPrograms = require('../controllers/dietPrograms');
var ctrlAuth = require('../controllers/authentication');
var ctrlDiarys = require('../controllers/diarys');
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

router.post('/diary/add', ctrlDiarys.diaryCreate);

module.exports = router;
