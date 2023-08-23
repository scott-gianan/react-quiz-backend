import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  correctOption: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

export const QuizItem = mongoose.model("QuizItem", quizSchema);
