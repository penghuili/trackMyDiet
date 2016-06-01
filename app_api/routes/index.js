var express = require('express');
var router = express.Router();
var ctrlDietPrograms = require('../controllers/dietPrograms');


router.get('/dietPrograms', ctrlDietPrograms.dietProgramsList);
//router.post('/dietPrograms', ctrlDietPrograms.dietProgramsCreate);
router.get('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsReadOne);
//router.put('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsUpdateOne);
//router.delete('/dietPrograms/:dietprogramid', ctrlDietPrograms.dietProgramsDeleteOne);

module.exports = router;
