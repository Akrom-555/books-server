const { response } = require('express');
const Book = require('../models/Book.model');

module.exports.bookController = {
    addBooks: (req, res) => {
        Book.create({
            name: req.body.name,
            genre: req.body.genre,
            auther: req.body.auther
        }).then((data) => {
            res.json(data)
        })
    },
    getBooksByIdGenre: async (req, res) => {
       try {
        const data = await Book.find({genre: req.params.id}).populate("genre")
         return res.json(data)
       } catch (e) {
        return res.json(e)
       }
    },

    getbooks: (req, res) => {
        Book.find().then((data) => {
            res.json(data)
        })
    },
    removeBooks: (req, res) => {
        Book.findOneAndDelete().then(() => {
            res.json('deleted')
        })
    },
    updateBooks: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            genre: req.body.genre,
            auther: req.body.auther
        }).then((data) => {
            res.json(data)
        })
    },
    getBooksById: (req, res) => {
        Book.findById(req.params.id, {
            name: req.body.name
        }).then((data) => {
            res.json(data)
        })
    },
    getBookByAuther: async (req, res) => {
        try {
            const data = await Book.find({auther: req.params.id}).populate("auther")
             return res.json(data)
           } catch (e) {
            return res.json(e)
           }
        }
    }