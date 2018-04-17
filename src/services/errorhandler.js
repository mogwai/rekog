
function errorHandler(err, req, res, next) {
  console.log("Something went wrong\n", err)
  console.log()
  res.json({
    error: err.message
  })
}

module.exports = errorHandler