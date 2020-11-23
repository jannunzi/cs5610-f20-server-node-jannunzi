const express = require("express")
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteboard',
  {useNewUrlParser: true});

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)

app.listen(3000)
