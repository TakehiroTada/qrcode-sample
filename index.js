import QRCode from 'qrcode';

QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log("Image Base64")
  console.log(url)
})

exports.handler = async (event) => {

  // TODO implement
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
