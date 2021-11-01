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

app.listen(3000, () => {
  console.log(`App listening on port ${3000}!`);
});

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
Send a get request to this URL to recieve an object containing a results property containing . . .
. . . of the reviews for a given product id.
Send what page you wish to see with a 'page' property, default 1
Send how many reviews you wish to see with a 'count' property, default 5
Send how you wish the reviews to be sorted with a 'sort' property, default 'null'
Send what product you wish to see reviews for with a 'product_id' property --REQUIRED
*/
app.get('/reviews/', (req, res) => {
  if (req.body.page === undefined) {
    req.body.page = 1;
  }
  if (req.body.count === undefined) {
    req.body.count = 5;
  }
  if (req.body.sort === undefined) {
    req.body.sort = null;
  }
  if (req.body.product_id === undefined) {
    res.status(400).send('Product ID required to serve request');
  }
  const params = new url.URLSearchParams(
    {
      page: req.body.page,
      count: req.body.count,
      sort: req.body.sort,
      product_id: req.body.product_id,
    },
  );
  axios.get(`/reviews/?${params}`)
    .then((result) => {
      console.log(result);
      res.status(200).send(result.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a get request to this URL to recieve an object containg all of the review metadata
Send a product id in order to specifiy which product you want to recieve metadata for --REQUIRED
*/
app.get('/reviews/meta', (req, res) => {
  if (req.body.product_id === undefined) {
    res.status(400).send('Product ID required to serve request');
  }
  const params = new url.URLSearchParams(
    {
      product_id: req.body.product_id,
    },
  );
  axios.get(`/reviews/meta?${params}`)
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
Send a post request to this URL to post a review to the api
It allows for the following parameters: product_id, rating, summary, . . .
. . . body, recommend, name, email, photos, and characteristics
*/
app.post('/reviews', (req, res) => {
  axios.post(req.body)
    .then((results) => {
      console.log(results);
      res.status(201).send('CREATED');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a put request to this URL to mark a review as helpful
Send the id of the review in the url in order to mark the right one
*/
app.put('/reviews/:review_id/helpful', (req, res) => {
  axios.put(req.url)
    .then((results) => {
      console.log(results);
      res.status(204).send('Review marked as helpful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a put request to this URL in order to report a review
Send the id of the review in the url in order to mark the right one
This review will stay in the database, but it will not be returned on get requests for reviews
*/
app.put('/reviews/:review_id/report', (req, res) => {
  axios.put(req.url)
    .then((results) => {
      console.log(results);
      res.status(204).send('Review reported!');
    })
    .catch((err) => {
      console.log(err);
      res.status(204).send(err);
    });
});
