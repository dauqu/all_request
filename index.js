const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

// Allow cors
const cors = require("cors");
// Loop of allowed origins
const allowedOrigins = [
  "http://localhost:3001",
  "http://localhost:3000",
  "https://admin-for-all.vercel.app",
  "https://dauqunews.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

// Connect to database
const connectDB = require("./config/database");
connectDB();

// Allow express to use json
app.use(bodyParser.json({ limit: "10mb" }));

io.on("connection", (client) => {
  client.on("event", (data) => {
    /* ... */
  });
  client.on("disconnect", () => {
    /* ... */
  });
});

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.use("/sms", require("./routes/sms")(io));
app.use("/login", require("./routes/login"));
app.use("/data", require("./routes/data")(io));

app.post("/", (req, res) => {
  // Print all data
  console.log(req.body);
  res.send(res.body);
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  io.on("connection", (client) => {
    client.on("event", (data) => {
      /* ... */
    });
    client.on("disconnect", () => {
      /* ... */
    });
  });
});
