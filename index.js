const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//Allow cors
const cors = require("cors");
//Loop of allowed origins
const allowedOrigins = [
  "http://localhost:3001",
  "http://localhost:3000",
  "https://admin-for-all.vercel.app",
  "https://dauqunews.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

//Connect to database
const connectDB = require("./config/database");
connectDB();

// Allow express to use json
app.use(bodyParser.json({ limit: "10mb" }));

app.get("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World!");
});

app.use("/sms", require("./routes/sms"));
app.use("/login", require("./routes/login"));
app.use("/data", require("./routes/data"));

app.post("/", (req, res) => {
   //Print all data 
   console.log(req.body);
   res.send(res.body)
}); 
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
