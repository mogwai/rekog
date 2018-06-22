const AWS = require("aws-sdk");
const rekognition = new AWS.Rekognition({ region: "eu-west-1" });

module.exports = buffer =>
  rekognition.recognizeCelebrities({ Image: { Bytes: buffer } }).promise();
