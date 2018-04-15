const app = require('express')()
const findceleb = require('./findceleb')

app.post('/', require('multer')().single("image"), async (req, res, next) => {
  try {
    let results = await findceleb(req.file.buffer)
    res.json(results)
  } catch (e) {
    next(e)
  }
})

app.use(require('services/errorhandler'))

app.listen(process.env.PORT || 3000, (err) => {
  console.log(err ? err.message : 'Server is listening to port 3000')
  if (err) process.exit()
});