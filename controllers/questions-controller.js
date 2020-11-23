const questionsService = require("../services/questions-service")

module.exports = (app) => {

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params["qid"]
    questionsService.findQuestionsForQuiz(quizId)
      .then(questions => res.send(questions))
    // res.send(questionsService.findQuestionsForQuiz(quizId))
  }

  const findAllQuestions = (req, res) =>
    questionsService.findAllQuestions()
      .then(questions => res.send(questions))

  app.get("/quizzes/:qid/questions", findQuestionsForQuiz)
  app.get("/questions", findAllQuestions)

}
