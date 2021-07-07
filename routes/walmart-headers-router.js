import express from 'express';
import { createSign } from 'crypto';

const PK_HEADER = '\n-----BEGIN PRIVATE KEY-----\n';
const PK_FOOTER = '\n-----END PRIVATE KEY-----\n';

let walmartHeadersRouter = express.Router();

/* POST walmartHeadersRouter listing.

  requestBody: {
    consumer: string,
    private: string,
    version: number
  }

*/

walmartHeadersRouter.post('/', function(req, res) {
  const body = req.body
  const timestamp = Date.now();
  const signature = generateSignature(timestamp, body.consumer, body.private, body.version);
  const response = {
    timestamp: timestamp,
    signature: signature
  }
  res.send(response);
});


function generateSignature(timestamp, consumer, key, version) {
  const privateKey = `${PK_HEADER}${key}${PK_FOOTER}`;

  const stringToSign = consumer + '\n' +
      timestamp + '\n' +
      version + '\n';

  const sign = createSign('RSA-SHA256');

  sign.update(stringToSign);
  return sign.sign(privateKey, 'base64');
}


export default walmartHeadersRouter;
