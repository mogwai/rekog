module.exports = function(err, req, res, next) {
  console.log("Something went wrong\n", err);
  res.json({
    error: err.message
  });
};
