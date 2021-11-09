import React from 'react';
import withInteractionsTracker from './InteractionsTracker';
import Overview from './Overview/Overview';
import RelatedProductsList from './Related Products/RelatedProductsList';
import OutfitProductsList from './Related Products/OutfitList';
import Reviews from './Review/Reviews';
import QuestionAndAnswer from './Questions/QuestionAndAnswer';
import ProductIdContext from './Context';
import Navbar from './Navbar';

import ProviderState from './Context/provider/ProviderState';
// please add your components here in the order they appear
const App = () => (
  <>
    <ProductIdContext.Provider value="40344">
      console.log(ProductIdContext);
      <div><Navbar /></div>
      <ProviderState>
        <div><Overview /></div>
      </ProviderState>
      <div><RelatedProductsList /></div>
      <div><OutfitProductsList /></div>
      <div><QuestionAndAnswer /></div>
      <div><Reviews /></div>
    </ProductIdContext.Provider>
  </>
);

export default App;
