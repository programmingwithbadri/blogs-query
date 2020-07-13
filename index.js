const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Send the posts
app.get("/posts", (req, res) => {

});

// Receive the events from Event bus
app.post("/events", (req, res) => {
  
});

app.listen(4002, async () => {
  console.log("Listening on 4002");
});
