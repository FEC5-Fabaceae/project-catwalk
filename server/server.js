// eslint-disable-next-line import/extensions
const axios = require('axios');
const path = require('path');
const express = require('express'); // npm installed
const url = require('url');
const authorization = require('./.config');

const app = express();

app.use(express.static(path.join(__dirname, '/../dist')));
app.use(express.json());
// other configuration...
axios.defaults.headers.common.Authorization = authorization;
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

app.listen(3000);

// TODO: When ready for development, remove all console.log requests and non-div comments
// --ATELIER PRODUCTS API--
// https://bit.ly/3jY8GXr
/*
Send a get request to this URL to recieve an array of objects. Each object is a product
Send what page you wish to start on with a 'page' property in the body of your request
Send how many items you wish to recieve, starting from the top of the page . . .
 . . . with a 'count' property in the body of your request
Default value for page: 1; count: 5
*/
app.get('/products', (req, res) => {
  if (req.body.page === undefined) {
    req.body.page = 1;
  }
  if (req.body.count === undefined) {
    req.body.count = 5;
  }
  const params = new url.URLSearchParams(
    {
      page: req.body.page,
      count: req.body.count,
    },
  );
  axios.get(`/products?${params.toString()}`)
    .then((results) => {
      console.log(results);
      console.log(results.data);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.status(500).send(err.data);
    });
});
/*
Send a get request to this URL to recieve a single object that matches the id given for the . . .
. . . product_id.
Example of a valid request: http://localhost:3000/products/40348
*/
app.get('/products/:product_id', (req, res) => {
  console.log(req);
  axios.get(req.url)
    .then((results) => {
      console.log(results);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
 Send a get request to this URL to recieve a single object which contains an array . . .
 of all the different styles for an object
 */
app.get('/products/:product_id/styles', (req, res) => {
  axios.get(req.url)
    .then((results) => {
      console.log(results);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a get request to this URL to recieve an array of id's for all related products. . .
. . . for the given product id
*/
app.get('/products/:product_id/related', (req, res) => {
  axios.get(req.url)
    .then((results) => {
      console.log(results);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
// --REVIEWS API--
// https://bit.ly/3bxm404
/*

*/