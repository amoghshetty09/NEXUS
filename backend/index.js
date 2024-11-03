const express = require("express");
const app = express();
const cors=require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const { connectomongodb}=require("./connect")

connectomongodb("mongodb://localhost:27017/UserQ&A")
.then(()=>console.log("Mongodbconnected"));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/userQ", userRoute);

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
