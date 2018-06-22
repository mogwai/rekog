require("dotenv").config();
const app = require("express")();
const findceleb = require("./services/findceleb");

app.get("/", (_req, res) => {
  res.send("HEY!");
});

app.post("/", require("multer")().single("image"), async (req, res, next) => {
  try {
    console.log("Received Request");
    if (!req.file) throw new Error("Missing image");

    const results = await findceleb(req.file.buffer);
    console.log("Replying", results);
    res.json(results);
  } catch (e) {
    next(e);
  }
});

app.use(require("services/errorhandler"));

app.listen(process.env.PORT || 3000, err => {
  console.log(err ? err.message : "Server is listening to port 3000");
  if (err) process.exit();
});
