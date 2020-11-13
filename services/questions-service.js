module.exports = (app) => {
  const questions = [
    {_id: "123", question: "What's your favorite color", quizId: "123"},
    {_id: "234", question: "What's your favorite pet", quizId: "123"},
    {_id: "345", question: "What's your favorite car", quizId: "123"},
    {_id: "456", question: "What's your favorite food", quizId: "234"},
    {_id: "567", question: "What's your favorite beach", quizId: "234"},
    {_id: "678", question: "What's your favorite season", quizId: "345"},
  ]

  app.get("/quizzes/:qid/questions", (req, res) => {
    const quizId = req.params["qid"]
    const questionsForQuiz = questions.filter(question => question.quizId === quizId)
    res.send(questionsForQuiz)
  })

}
