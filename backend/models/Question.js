const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  difficulty: { type: String, required: true }, 
  language: { type: String, required: true }, 
});

module.exports = mongoose.model("Question", questionSchema);
