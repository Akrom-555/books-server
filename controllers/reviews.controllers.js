
const Review = require('../models/Review.model')

module.exports.reviewController = {
  addReview: (req, res) =>{
    Review.create({
        text: req.body.text,
        name: req.body.name,
        book: req.body.book
    }).then((data) => {
        res.json(data)
    })
  },
  removeReview: (req, res) => {
    Review.findOneAndDelete().then(() => {
        res.json('deleted')
    })
  },
  getReview: (req, res) => {
    Review.find().then((data) => {
        res.json(data)
    })
  },
  getReviewByBook: (req, res) => {
    Review.find({book: req.params.id}, (err, data) => {
       res.json(data)
    }).populate('book')
  }
}