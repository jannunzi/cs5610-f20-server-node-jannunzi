const mongoose = require("mongoose")
const questionSchema = require("./questionSchema")
const questionModel = mongoose.model("QuestionModel", questionSchema)

const findAllQuestions = () => questionModel.find()
const findQuestionForQuiz = (quizId) => questionModel.find({quizId: quizId})

module.exports = {
  findAllQuestions, findQuestionForQuiz
}
