#!/usr/bin/env nodejs

// from https://www.sitepoint.com/how-to-use-ssltls-with-node-js/
// not working 12/24/2019

const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/goalyourself.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/goalyourself.com/fullchain.pem")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});

app.listen(8000);

https.createServer(options, app).listen(8080);
