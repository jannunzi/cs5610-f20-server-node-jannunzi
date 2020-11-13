
module.exports = (app) => {
  let quizzes = [
    {_id: "123", title: "quiz 1"},
    {_id: "234", title: "quiz 2"},
    {_id: "345", title: "quiz 3"},
  ]

  const findAllQuizzes = (req, res) => {
    res.send(quizzes)
  }

  const findQuizById = (req, res) => {
    const quizId = req.params["qid"]
    const quiz = quizzes.find(quiz => quiz._id === quizId)
    res.send(quiz)
  }

  const createQuiz = (req, res) => {
    const quiz = {_id: (new Date()).getTime()+"", title: "New Quiz"}
    quizzes.push(quiz)
    res.send(quiz)
  }

  const deleteQuiz = (req, res) => {
    const qid = req.params.qid
    quizzes = quizzes.filter(quiz => quiz._id !== qid)
    res.send(200)
  }

  const updateQuiz = (req, res) => {
    const qid = req.params.qid
    const newQuiz = req.body
    quizzes = quizzes.map(quiz => quiz._id === qid ? newQuiz : quiz)
    res.send(200)
  }

  app.get("/quizzes/:qid", findQuizById)
  app.get("/quizzes", findAllQuizzes)
  app.post("/quizzes", createQuiz)
  app.delete("/quizzes/:qid", deleteQuiz)
  app.put("/quizzes/:qid", updateQuiz)
}

