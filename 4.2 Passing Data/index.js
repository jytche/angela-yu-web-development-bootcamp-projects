import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Enter your name below",
  }
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  var firstName = req.body["fName"];
  var lastName = req.body["lName"];
  var numberOfChar = firstName.length + lastName.length;
  const data = {
    title: `Your name has ${numberOfChar} characters.`
  }
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
  