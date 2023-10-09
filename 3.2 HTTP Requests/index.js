import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", (req, res) => {
    res.send("My contact details are 9481 1111");
})

app.get("/about", (req, res) => {
    res.send("<p>My name Jeff</p>");
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})