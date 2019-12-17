var express = require('express');
var router = express.Router();

const bandController = require('../controllers/bandController.js');

router.get('/edit/:id', bandController.edit);
 router.post('/update/:id', bandController.update2);
 //router.post('/band/update/:id', bandController.update2);
router.get('/delete/:id',bandController.delete2);
//router.post('/band',bandController.save);




module.exports = router;
