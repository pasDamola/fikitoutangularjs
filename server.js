const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(__dirname +  '/'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const hostname = 'localhost';
const port = 3000;

const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);  
});

// var express = require('express');
// var app = express();
// var jwt = require('express-jwt');
// var jwks = require('jwks-rsa');

// var port = process.env.PORT || 8080;

// var jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://oyincode.auth0.com/.well-known/jwks.json"
//     }),
//     audience: 'https://api.github.com/gists',
//     issuer: "https://oyincode.auth0.com/",
//     algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

// app.listen(port);