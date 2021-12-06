# Project Catwalk

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

---
![](assets/Sample.gif)

Our team was asked to create a new frontend for an e-commerce client.
The project entails a complete redesign of an antiquated e-commerce frontend that includes adding style and modern functionality to the following widgets:
- Product Overview
- Related Products & Outfit
- Questions & Answers
- Ratings & Reviews

Our team of four worked collaboratively in our efforts to enrich the user experience utilizing React with React hooks for simple code reusability. An explanation of each of the components may be found below.
# Contributors
## Makeda Davis - Overview
  [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/1makedadavis/)
The Overview widget is the foremost module that provides the product overview . Here the customer may select a specific product, style, size, and quantity and add to cart. This widget’s functionality is divided into 4 compartments:
- The image gallery
- Product Information
- Style Selector
- Add to cart

The image gallery shows an image of the current product in an image slider allowing from scrolling between relates styles.Up to 7 related thumbnails are displayed that may be clicked for display. The product information, displayed to the right of the gallery, dynamically displays the products name, sale and/or original price, in addition to the products category . The style selector allows the user to toggle between styles by clicking on thumbnails. And Last , the add to cart component allows users to select size and quantity from drop down lists. The compartment informs users if products of product availability and allowed for products to be added to cart by an add to cart button used for checkout.
## Jeffrey Stewart
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jeffrey-stewart-per5i6tant/)
### Related Products
The Related Products section of this widget contains items that are comparable to the product displayed in the Overview widget.  This carousel of product cards allows customers to quickly view products that may be of interest to them by clicking on the card's body, changing the displayed information across the app, with the clicked product now featured by the Overview widget. If the star icon is clicked on a card, it will compare the product features from the Overview widget with the product features of the related product.

 The Outfit widget allows customers to save the item displayed by the Overview widget to a list that is unique to them, allowing a customer to quickly re-navigate to a product they are interested in.  Clicking the x icon on this card will remove it from the customer's list.
 ### Express Server
 The Express Server allows every widget to communicate with a legacy API, so that the app can access the legacy API's data without exposing any of the client's routes in order to protect their data. It also allows the app to store cookies containing data specific to a customer, in order to provide tailored content (such as the Outfit widget).
## Eun Ji Roh - Question & Answer
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](http://www.linkedin.com/in/eunji-roh-00333)
The Question & Answer Widget displays questions users have about a product. By default, it is sorted by helpfulness to provide users useful information. Users can also filter questions through the search bar. Other interactive features include marking a question or an answer as helpful, reporting an answer, and adding a question or an answer. The question list dynamically changes whenever a different product is rendered through the utilization of react hooks and context.
## April Granzow - Ratings & Reviews
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/april-granzow-38969791/)
The ratings & reviews widget displays a list of user submitted reviews for the given product.  It can be sorted by relevance, date, and helpfulness.  A breakdown of the review score distribution appears with a dynamically-rendered stacked-bar chart.  Users can also submit new reviews.

# Installation
To run this project on your local machine:
1. Clone the repo
2. Then, use `npm install` in order to install all dependencies from the `package.json` file to your local repo.
3. Then, navigate to the server folder and make a copy of `.config-example.js. `
4. Rename this new file to `.config.js`
5. Next, create a GitHub authorization token with the following privileges
    -  `read:org` (found in the `admin:org` section)
    -  `user` (including `read:user`, `user:email`, and `user:follow`).
6. After you have saved this token somewhere secure, paste it into the `.config.js` file.
  - This will allow the server to make requests on the client's behalf.
7. Once all of these steps are completed, run `node server/server.js`
8. Open a second terminal and type `npm run build`
  - (this will run Webpack in production mode).
9. Open your browser to `http://localhost:3000/`

# Optimization
In order to optimize this application's performance, the following steps were taken:
  1. Minify the files by running webpack in production mode
  2. Use react lazy-load on all widgets but Overview in order to allow the Overview widget to load as quickly as possible.
  3. Added text compression to all responses from the express server
  4. Inline-styled all essential css

![Lighthouse Results](assets/Screen%20Shot%202021-11-13%20at%2012.50.52%20PM.png)