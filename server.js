import express from "express";
import mongoose from "mongoose";
import { QuizItem } from "./models/quizModel.js";
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
//routes
app.get("/", (request, response) => {
  response.send("Hello Node API");
});
app.post("/quiz", async (request, response) => {
  try {
    const quiz = await QuizItem.create(request.body);
    response.status(200).json(quiz);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: error.message });
  }
});
app.get("/quiz", async (request, response) => {
  try {
    const data = await QuizItem.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://scott-admin:scotty123@react-quiz.ddxtxqj.mongodb.net/React-Quiz-Bank?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`connected to the database`);
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
