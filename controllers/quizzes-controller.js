const quizzesService = require("../services/quizzes-service")

module.exports = (app) => {

  const findAllQuizzes = (req, res) => {
    quizzesService.findAllQuizzes()
      .then(quizzes => res.send(quizzes))
  }

  const findQuizById = (req, res) => {
    quizzesService.findQuizById(req.params.qid)
      .then(quiz => res.send(quiz))
  }

  const createQuiz = (req, res) => {
    quizzesService.createQuiz(req.body.quiz)
      .then(actualQuiz => res.send(actualQuiz))
  }

  const deleteQuiz = (req, res) => {
    const qid = req.params.qid
    quizzesService.deleteQuiz(qid)
      .then(status => res.send(status))
  }

  const updateQuiz = (req, res) => {
    const qid = req.params.qid
    const newQuiz = req.body
    quizzesService.updateQuiz(qid, newQuiz)
      .then(status => res.send(status))
  }

  const findAllQuizzesDetails = (req, res) => {
    quizzesService.findAllQuizzesDetails()
      .then(quizzes => res.send(quizzes))
  }

  app.get("/quizzes/:qid", findQuizById)
  app.get("/quizzes", findAllQuizzes)
  app.get("/quizzes-details", findAllQuizzesDetails)
  app.post("/quizzes", createQuiz)
  app.delete("/quizzes/:qid", deleteQuiz)
  app.put("/quizzes/:qid", updateQuiz)
}

