const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const pug = require('pug');
const upload = multer();
const app = express();

// for parsing application/xwww-
//form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));
app.set('views', './views');

app.set('view engine', 'pug');

app.get('/', function(req, res){
   res.render('form');
});


app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

app.listen(3000, () => {
    console.log('Server is listening to port 3000')
});

