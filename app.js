import express from "express";
import https from "https";
import path from "path";
import fs from 'fs'

const __dirname = path.resolve()

const app = express();

app.use('/', (req, res, next) => {
  res.send("Hello World")
}) 

const options = {
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'mock-service.crt')),
  key: fs.readFileSync(path.join(__dirname, 'cert', 'mock-service.key')),
  ca: fs.readFileSync(path.join(__dirname, 'cert', 'mock-ca.crt')),
  requestCert: true,
  rejectUnauthorized: true
}

const sslServer = https.createServer(options, app)

const sslPort = 3443;
sslServer.listen(sslPort, () => {
  console.log(`SSL Server is listening on port ${sslPort}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Easy Access Server is listening on port ${port}`);
});
