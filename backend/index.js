require('dotenv').config()


const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 5000

mongoose.connect(process.env.DATABASE)
    .then(() => {
    console.log("MongoDB Connected")})
    .catch(
        console.log("DB NOT CONNECTED"))

app.listen(port, () => console.log(`Server Started on ${port}`))