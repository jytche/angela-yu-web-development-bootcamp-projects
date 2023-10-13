import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = [];
const wItems = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {itemList: items});
})

app.post("/", (req, res) => {
    items.push(req.body["item"]);
    res.render("index.ejs", { itemList: items });
})

app.get("/work", (req, res) => {
    res.render("work.ejs", {wItemList: wItems});
})

app.post("/work", (req, res) => {
    wItems.push(req.body["wItem"]);
    res.render("work.ejs", { wItemList: wItems });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });