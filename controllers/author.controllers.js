const Author = require('../models/Author.model');

module.exports.autherController = {
    addAuthor: (req, res) => {
        Author.create({
            name: req.body.name,
            info: req.body.info
        }).then((data) => {
            res.json(data)
        })
    },
    getAuther: (req ,res) => {
        Author.find().then((data) => {
             res.json(data)
        })
    },
    removeAuther: (req, res) => {
       Author.findOneAndDelete().then(() => {
        res.json('deleted')
       })
    }
}