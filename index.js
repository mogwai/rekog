const findceleb = require("./services/findceleb");
const sleep = require("util").promisify(setTimeout);
const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send();
});

app.post("/", async (req, res) => {
  try {
    console.log(context);
    const file = Buffer.from(context.body.image, "utf-8");
    await sleep(2000);
    if (!req.file) throw new Error("Missing image");
    const results = await findceleb(file);
    console.log("Replying", results);

    cb(null, { body: results });
  } catch (e) {
    console.log(e);
    cb(e);
  }
});

module.exports.handler = serverless(app);
