/* var express = require('express');
var app = express();

/
app.get('/hello', function (req, res) {
    res.send("Hello World!");
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});
/

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000, (err) => {
    console.log("Started Server on port ch " + 3000);
});

*/

// node index.js to start

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var pug = require('pug');
var upload = multer();
var app = express();

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

