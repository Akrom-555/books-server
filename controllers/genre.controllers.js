const Genre = require('../models/Genre.model');

module.exports.genreController = {
    addGenre: (req, res) => {
        Genre.create({
            name: req.body.name,
            text: req.body.text
        }).then((data) => {
            res.json(data)
        })
    },
    getGenre: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
    }
}