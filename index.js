import QRCode from 'qrcode';

// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log("Image Base64")
//   console.log(url)
// })

const generateQR = async text => {
  try {
    return await QRCode.toDataURL(text)
  } catch (err) {
    console.error(err)
  }
}

const hoge = generateQR("あいうえお");
console.log(hoge);

// exports.handler = async (event) => {

//   // TODO implement
//   const response = {
//       statusCode: 200,
//       body: JSON.stringify('Hello from Lambda!'),
//   };
//   return response;
// };
