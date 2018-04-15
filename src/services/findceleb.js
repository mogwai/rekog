const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json')
const rekognition = new AWS.Rekognition({ apiVersion: '2016-06-27' });

module.exports = (buffer) => {
  return new Promise((res, rej) => {
    rekognition.recognizeCelebrities({
      Image: {
        Bytes: buffer,
      }
    }, function (err, data) {
      if (err) rej(err)
      else res(data)
    })
  })
}