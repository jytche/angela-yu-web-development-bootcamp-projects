// HINTS:
// 1. Import express and axios

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// 2. Create an express app and set the port number.

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// 3. Use the public folder for static files.

const yourBearerToken = "a6e1e29a-89f4-4cbb-8ba8-c71c90b885bf";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "/random");
        const result = response.data;
        res.render("index.ejs", { content: result });
        console.log(result)
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
  }});

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });