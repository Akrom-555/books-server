const {Router} = require('express');
const { genreController } = require('../controllers/genre.controllers');
const router = Router();

router.post('/genre', genreController.addGenre);
router.get('/genre', genreController.getGenre);

module.exports = router