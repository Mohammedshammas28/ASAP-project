const express = require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const connect = require("./.db/connection");


mongoose.connect(process.env.mongo_url)
.then(()=>{
  console.log("connected to mongodb")
})
.catch((error)=>{
  console.log(error)
})



app.get("/", async (req, res) => {
  res.send("it's working on my machine");''
});

const port = process.env.PORT;

app.listen(port, async () => {
  try {
    await connect;

    console.log(`app is running on http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});