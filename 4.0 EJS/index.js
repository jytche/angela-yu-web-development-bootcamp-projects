import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

function getDay() {
    const date = new Date();
    const dayOfWeek = date.getDay();
    let isWeekDay = false;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        isWeekDay = false;
    }
    return isWeekDay;
}

app.get("/", (req, res) => {
    let type = "a weekday";
    let advice = "its time to work hard";

    const isWeekDay = getDay();

    if (!isWeekDay) {
        type = "the weekend";
        advice = "its time to have some fun!";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: advice})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });