const { Rekognition } = require("aws-sdk");
const rekognition = new Rekognition({ region: "eu-west-1" });

module.exports = buffer => {
  return new Promise((res, rej) => {
    rekognition.recognizeCelebrities(
      {
        Image: {
          Bytes: buffer
        }
      },
      function(err, data) {
        if (err) rej(err);
        else res(data);
      }
    );
  });
};
