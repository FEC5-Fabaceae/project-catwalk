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
// --PRODUCTS API--
// https://bit.ly/3jY8GXr
/*
Send a get request to this URL to recieve an array of objects. Each object is a product
Send what page you wish to start on with a 'page' property in the body of your request
Send how many items you wish to recieve, starting from the top of the page . . .
 . . . with a 'count' property in the body of your request
Default value for page: 1; count: 5
*/
app.get('/products', (req, res) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  if (req.query.count === undefined) {
    req.query.count = 5;
  }
  const params = new url.URLSearchParams(
    {
      page: req.query.page,
      count: req.query.count,
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
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  if (req.query.count === undefined) {
    req.query.count = 5;
  }
  if (req.query.sort === undefined) {
    req.query.sort = null;
  }
  if (req.query.product_id === undefined) {
    res.status(400).send('Product ID required to serve request');
  }
  const params = new url.URLSearchParams(
    {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id,
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
  if (req.query.product_id === undefined) {
    res.status(400).send('Product ID required to serve request');
  }
  const params = new url.URLSearchParams(
    {
      product_id: req.query.product_id,
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
  axios.post('/reviews', req.body)
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
// --QUESTIONS AND ANSWERS API--
// https://bit.ly/3w4FFOO
/*
Send a get request to this URL to get an array of objects for each question. . .
Each questions has an answers object, with a unique key for each answer to the question
Send a 'product_id' property in the body to get the questions for the given product --REQUIRED
Send a 'page' property in the body to set a page to start looking at results from
Send a 'count' property in the body to set how many questions will be returned in the array
*/

app.get('/qa/questions/', (req, res) => {
  if (req.query.page === undefined) {
    req.query.page = 1;
  }
  if (req.query.count === undefined) {
    req.query.count = 5;
  }
  const params = new url.URLSearchParams(
    {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count,
    },
  );
  if (req.query.product_id === undefined) {
    res.status(400).send('Product id required to serve request');
  } else {
    axios.get(`/qa/questions/?${params}`)
      .then((results) => {
        console.log(results.data);
        res.status(200).send(results.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  }
});
/*
Send a get request to this URL to get an object containing all answers for a given question. . .
. . . in a results array
Send the question's id in the URL --REQUIRED
Send a 'page' property in the body to set what page to start on, default
Send a 'count' property in the body to set how many results to send per page
*/
app.get('/qa/questions/:question_id/answers', (req, res) => {
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
Send a post request to this URL to post a question
Send a 'body' property with a value of the text of the question being asked
Send a 'name' property with a value of the text for the Username who is asking the question
Send a 'email' property with a value of the text for the email address of the asker
Send a 'product_id' property with the ID of the product in question *badum-tss*
*/
app.post('/qa/questions', (req, res) => {
  axios.post('/qa/questions', req.body)
    .then((results) => {
      console.log(results);
      res.status(201).send('Quesiton created!');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a post request to this URL to post an answer
Send a 'question_id' in the url for the quesiton you wish to post an answer for --REQUIRED
--NOTE: The api docs make multiple incorrect references to the 'question' being asked . . .
This is clearly an error. Follow my comments instead.
Send a 'body' property in the body of your request for the text of your answer
Send a 'name' property in the body of your request for the name of the answerer
Send a 'email' property in the body of your request for the email of the answerer
Send a 'photos' property in the body of your request to send corresponding images for your answer
--NOTE, the 'photos' property is the only one that is optional it seems, but I could be wrong
*/
app.post('/qa/questions/:question_id/answers', (req, res) => {
  axios.post(req.url, req.body)
    .then((results) => {
      console.log(results);
      res.status(201).send('Answer created!');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a put request to this URL with the quesiton id in the URL to mark a question as helpful
*/
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  axios.put(req.url)
    .then((results) => {
      console.log(results);
      res.status(204).send('Question marked as helpful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send a put request to this URL with the question id in the URL to report it
*/
app.put('/qa/questions/:question_id/report', (req, res) => {
  axios.put(req.url)
    .then((results) => {
      console.log(results);
      res.status(204).send('Question reported!');
    })
    .catch((err) => {
      console.log(err);
      res.status(204).send(err);
    });
});
/*
Send a put request to this URL with the answer id in the URL to mark it as helpful
*/
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  axios.put(req.url)
    .then((results) => {
      console.log(results);
      res.status(204).send('Answer marked as helpful');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
/*
Send put request to this URL with the answer_id in the URL to report an answer
*/
app.put('/qa/answers/:answer_id/report', (req, res) => {
  axios.put(req.url)
    .then((results) => {
      console.log(results);
      res.status(204).send('Answer reported!');
    })
    .catch((err) => {
      console.log(err);
      res.status(204).send(err);
    });
});
// --CART API--
// https://bit.ly/3nUxCR3
/*
Send a get request to this URL to get an array of each sku object in the cart
*/
app.get('/cart', (req, res) => {
  axios.get('/cart')
    .then((results) => {
      console.log(results);
      res.status(200).send(results.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
/*
Send a post request to this URL with a sku_id property in the body to put that item in the cart
*/
app.post('/cart', (req, res) => {
  axios.post('/cart', req.body)
    .then((results) => {
      console.log(results);
      res.status(201).send('Product added');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
// --INTERACTIONS API--
// https://bit.ly/2ZMXtSw
/*
Send a post request to this URL to add an interaciton to the database
Pass in the body the folowing parameters: element(string), widget(string), and time (string)
--NOTE: it looks like this is a log of user activity, detailing which element was selected,
what module that selection took place in, and the time it occured
*/
app.post('/interactions', (req, res) => {
  if (req.body.element === undefined) {
    res.status(422).send('No element property in body');
  }
  if (req.body.widget === undefined) {
    res.status(422).send('No widget property in body');
  }
  if (req.body.time === undefined) {
    res.status(422).send('No time property in body');
  }
  axios.post('/interactions', req.body)
    .then((results) => {
      console.log(results);
      res.status(201).send('Created');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});
