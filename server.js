const express = require("express")
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./services/quizzes-service")(app)
require("./services/questions-service")(app)

app.listen(3000)
