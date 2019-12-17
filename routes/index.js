var express = require('express');
var router = express.Router();
let multer = require('multer');


const musicController = require('../controllers/musicController.js');


//multer
let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
 });
 var upload = multer({
    storage: storage
 }).single('photo')




router.get('/',musicController.list);
router.post('/', upload, musicController.save);
router.post('/band',musicController.save2);
router.get('/delete/:id',musicController.delete);
router.get('/edit/:id',musicController.edit);
router.post('/update/:id',upload, musicController.update);



module.exports = router;
