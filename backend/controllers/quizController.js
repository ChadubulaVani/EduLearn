const Question = require("../models/Question");

exports.getQuestionsByTopic = async (req, res) => {
  const topic = req.params.topic;
  try {
    const questions = await Question.find({ topic });
    if (!questions.length) {
      return res
        .status(404)
        .json({ message: "No questions found for this topic" });
    }
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
