const express = require("express");
const router = express.Router();
const { getQuestionsByTopic } = require("../controllers/quizController");

router.get("/:topic", getQuestionsByTopic);

module.exports = router;
