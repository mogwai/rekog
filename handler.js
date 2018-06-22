const findceleb = require("./services/findceleb");

module.exports.hello = (context, event, cb) => {
  cb(null, {
    status: 200
  });
};

module.exports.guessImage = async (context, event, cb) => {
  try { 
    console.log("Received Request");
    console.log(context)
    if (!req.file) throw new Error("Missing image");
    const results = await findceleb(req.file.buffer);
    console.log("Replying", results);
    res.json(results);
  } catch (e) {
    next(e);
  }
};
