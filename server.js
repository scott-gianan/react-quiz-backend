import express from "express";
const app = express();
const PORT = 3000;

//routes
app.get("/", (request, response) => {
  response.send("Hello Node API");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
