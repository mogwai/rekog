var AWS = require('aws-sdk');
const getimage = require('base64-img')

AWS.config.loadFromPath('./config.json')
var rekognition = new AWS.Rekognition({ apiVersion: '2016-06-27' });
var url = 'http://www.pngpix.com/wp-content/uploads/2016/03/Vladimir-Putin-PNG-image.png'

getimage.requestBase64(url, (err, res, body) => {
  body = body.replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
  body = new Buffer(body, 'base64')

  const params = {
    Image: {
      Bytes: body,
    }
  }

  rekognition.recognizeCelebrities(params, function (err, data) {
    if (err) console.log(JSON.stringify(err)); // an error occurred
    else console.log(JSON.stringify(data)); // successful response
  });
})  