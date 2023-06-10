const express = express("express");
const app = express();
const port = 3000;

//alllow express to parse json data
app.use(express.json());

app.get("/", (req, res) => {
    //Print all get and post request 
    console.log(req.query);
    console.log(req.body);

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
