//writable, readable and duplex stream
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//myReadStream.pipe(myWriteStream);

var base64Img = require('base64-img');
var url = 'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2006/08/jpeg.png';

var img = base64Img.requestBase64(url, function(err, res, body) {
    console.log('image recieved');
    //console.log(body);
    var b = body;

    console.log(b[22,b.length]);
});

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});

var params = {
    Image: { 
      Bytes: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      /*S3Object: {
        Bucket: 'STRING_VALUE',
        Name: 'STRING_VALUE',
        Version: 'STRING_VALUE'
      } */
    }
  };
  rekognition.recognizeCelebrities(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });