const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");
const { apiURL, apiKey } = require("../config");
//Initialize Server
const app = express();
const port = 3001;

//Middlewares
app.use(cors());
app.use(json());

//Endpoints!!!!!

app.get("/api/test", (req, res, next) => {
  res.status(200).json("test successful");
});

console.log(apiURL, apiKey);

app.listen(port, () => {
  console.log(`SERVER IS LISTENING ON PORT: ${port}`);
});
