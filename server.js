import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 3000;

//routes
app.get("/", (request, response) => {
  response.send("Hello Node API");
});

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
