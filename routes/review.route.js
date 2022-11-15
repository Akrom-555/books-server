const {Router} = require('express');
const { reviewController } = require('../controllers/reviews.controllers');
const router = Router();


router.post('/review', reviewController.addReview);
router.delete('/review', reviewController.removeReview);
router.get('/review', reviewController.getReview);
router.get('/review/books/:id', reviewController.getReviewByBook);





module.exports = router;