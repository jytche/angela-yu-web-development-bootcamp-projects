import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
const myAPIKey = '1';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "random.php", {
      params: {
        apiKey: myAPIKey,
      }
    });
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {
      drink: result.drinks[0].strDrink,
      image: result.drinks[0].strDrinkThumb,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
}});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "random.php", {
      params: {
        apiKey: myAPIKey,
      }
    });
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {
      drink: result.drinks[0].strDrink,
      image: result.drinks[0].strDrinkThumb,
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
}});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  









