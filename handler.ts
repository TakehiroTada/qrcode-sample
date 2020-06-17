import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import QRCode from "qrcode";
import AWS from "aws-sdk";
import dayjs from "dayjs";

export const getQRCode: APIGatewayProxyHandler = async (event, _context) => {
  awsSettings();
  const number: string = event.queryStringParameters.number; //QRコードに入れる数字
  const img = await generateQR(number);

  const url = await s3Upload(img);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        number: url,
      },
      null,
      2
    ),
  };
};

const awsSettings = () => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });
};

const generateQR = async (text) => {
  const options = {
    width: 500,
    height: 500,
  };
  try {
    return QRCode.toDataURL(text, options);
  } catch (err) {
    console.error(err);
  }
};

const setFilename = () => {
  const date = new Date();
  dayjs(date);
  return date;
};

const s3Upload = async (encodedData) => {
  // Buffer
  const fileData = encodedData.replace(/^data:\w+\/\w+;base64,/, "");
  const decodedFile = new Buffer(fileData, "base64");

  // ファイルの拡張子
  const fileExtension = encodedData
    .toString()
    .slice(encodedData.indexOf("/") + 1, encodedData.indexOf(";"));

  // ContentType
  const contentType = encodedData
    .toString()
    .slice(encodedData.indexOf(":") + 1, encodedData.indexOf(";"));

  const filename = "qrcode_" + setFilename();
  const params = {
    Body: decodedFile,
    Bucket: process.env.AWS_BUCKET,
    Key: [filename, fileExtension].join("."),
    ContentType: contentType,
  };

  const s3 = new AWS.S3();
  await s3
    .putObject(params)
    .promise()
    .then((e, c) => {
      console.log("Success!!!");
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });

  const signedParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: `${filename}.png`,
    Expires: 60,
  }; // Expires:有効期限(秒)
  const signedUrl = await s3.getSignedUrl("getObject", signedParams);

  return signedUrl;
};
