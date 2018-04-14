//writable, readable and duplex stream
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
//myReadStream.pipe(myWriteStream);

var base64Img = require('base64-img');
var url = 'http://pluspng.com/img-png/face-hd-png-vladimir-putin-face-png-image-1645.png'
base64Img.requestBase64(url, function(err, res, body){
  console.log('image recieved');
  //console.log(body);
  img = body.split("data:image/png;base64,")[1];

  var length = img.length;
  imageBytes = new ArrayBuffer(length);
  console.log(imageBytes);

  var ua = new Uint8Array(imageBytes);
  for (var i = 0; i < length; i++) {
    ua[i] = img.charCodeAt(i);

  }

  //console.log(img);
  var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var rekognition = new AWS.Rekognition({apiVersion: '2016-06-27'});

var params = {
    Image: { 
      //Bytes: imageBytes,
      S3Object: {
        Bucket: 'node-sdk-sample-65511e90-57a2-4b5b-a4f8-148bc5c96dfa',
        Name: 'putin.png',
        //Version: 'STRING_VALUE'
      } 
    }
  };
  rekognition.recognizeCelebrities(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  }); 


});
  

