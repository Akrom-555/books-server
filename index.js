const express = require('express');
const mongoose = require("mongoose");
const port = 4000;
const app = express();


  app.use(express.json());
  app.use(require("./routes/books.route"));
  app.use(require("./routes/genre.route"));
  app.use(require("./routes/auther.route"));
  app.use(require('./routes/review.route'))

mongoose.connect('mongodb+srv://Akrom:akrom@cluster1.p5qqttz.mongodb.net/book-Server?retryWrites=true&w=majority', () => {
    console.log('Mongoose Start')
    app.listen(port, () => {
        console.log('Server Start')
    })
})