var express = require("express");

const app = express();
let PORT = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("We\'re cooking with gas."));

app.listen(PORT, () => console.log("It\'s running."));