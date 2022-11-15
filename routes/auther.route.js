const {Router} = require('express');
const { autherController } = require('../controllers/author.controllers');
const router = Router();

router.post('/auther', autherController.addAuthor);
router.get('/auther', autherController.getAuther)
router.delete('/auther', autherController.removeAuther)

module.exports = router