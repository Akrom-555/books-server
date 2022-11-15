const {Router} = require('express');
const { bookController } = require('../controllers/books.controllers');
const router = Router();

router.post('/books',bookController.addBooks);
router.get('/books',bookController.getbooks);
router.get('/books/:id',bookController.getBooksById);
router.get('/books/auther/:id',bookController.getBookByAuther);
router.get('/books/genre/:id',bookController.getBooksByIdGenre);
router.delete('/books',bookController.removeBooks);
router.patch('/books/:id',bookController.updateBooks);

module.exports = router