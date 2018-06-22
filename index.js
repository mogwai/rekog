require("dotenv").config();
const findceleb = require("./services/findceleb");
const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send();
});

app.post("/", require("multer")().single("image"), async (req, res) => {
  try {
    if (!req.file) throw new Error("Missing image");
    console.log(req.file)
    const buffer = new Buffer(req.file.buffer,'base64')
    const results = await findceleb(buffer);
    console.log("Replying", results);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
});

module.exports.handler = serverless(app);
