const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const send = require("gmail-send")({
    user: process.env.username,
    pass: process.env.password,
    to: "shahanjaclyn@gmail.com"
  })

const port = 3080;

const app = express()
app.use(express.static(`${__dirname}/../build`))

app.use(json())
app.use(cors())

app.post("/api/sendEmail", (req, res) => {
    send({
      subject: "JOB PROSPECT FROM: " + req.body.name + " at " + req.body.email,
      text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    }, function (err, res) {
      console.log('* ERROR send() callback returned: err:', err, '; res:', res);
    })
    console.log("working")
    res.status(200).json((message = "working"))
  })
  
  const path = require("path")
  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/../build/index.html"))
  })
  
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })