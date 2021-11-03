import React from 'react';
import Overview from './Overview/Overview';
import Reviews from './Review/Reviews';
import QuestionAndAnswer from './Questions/QuestionAndAnswer';
import ProductIdContext from './Context';

// please add your components here in the order they appear
const App = (props) => (
  <>
    <ProductIdContext.Provider value="40345">
      console.log(ProductIdContext);
      <div><Overview /></div>
      <div><QuestionAndAnswer /></div>
      <div><Reviews /></div>
    </ProductIdContext.Provider>
  </>
);

export default App;
