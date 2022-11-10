const express = require("express")

const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World !! I am here to stay'))

app.listen(port, () => console.log(`Server Started on ${port}`))