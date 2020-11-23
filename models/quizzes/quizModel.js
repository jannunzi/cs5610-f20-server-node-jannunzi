const mongoose = require("mongoose")
const quizSchema = require("./quizSchema")
const quizModel = mongoose.model("QuizModel", quizSchema)

const findAllQuizzes = () =>
  quizModel.find()

const findAllQuizzesDetails = () =>
  quizModel.find().populate("questions").exec()

const findQuizById = (qid) =>
  quizModel.findById(qid)
// quizModel.findOne({_id: qid})

const findQuizByIdDetails = (qid) =>
  quizModel.findById(qid).populate("questions").exec()

const createQuiz = (newQuiz) =>
  quizModel.create(newQuiz)

const removeQuiz = (qid) =>
  quizModel.remove({_id: qid})

const updateQuiz = (qid, newQuiz) =>
  quizModel.update({_id: qid}, {$set: newQuiz})

module.exports = {
  findQuizByIdDetails, findAllQuizzesDetails, findAllQuizzes, findQuizById, createQuiz, removeQuiz, updateQuiz
}
