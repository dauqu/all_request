const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// Allow express to use json
app.use(bodyParser.json({ limit: "10mb" }));

app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World!");
});

app.post("/", (req, res) => {
   //Print all data 
   console.log(req.body);
   res.send(res.body)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
