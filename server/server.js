// eslint-disable-next-line import/extensions

const path = require('path');
const express = require('express'); // npm installed
const authorization = require('./.config');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());
// other configuration...

app.listen(3000);

// TODO: take in any request from the client and append an authorization object
// with a value of our authorization string to it
