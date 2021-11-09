import React, { useState, useMemo } from 'react';
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
const App = (props) => {
  const [productID, setProductID] = useState('40344');
  const value = useMemo(
    () => ({ productID, setProductID }),
    [productID],
  );
  return (
    <>
      <ProductIdContext.Provider value={value}>
        <div><Navbar /></div>
        <ProviderState>
          <div>{React.createElement(withInteractionsTracker(Overview))}</div>
        </ProviderState>
        <div>{React.createElement(withInteractionsTracker(RelatedProductsList))}</div>
        <div>{React.createElement(withInteractionsTracker(OutfitProductsList))}</div>
        <div>{React.createElement(withInteractionsTracker(QuestionAndAnswer))}</div>
        <div>{React.createElement(withInteractionsTracker(Reviews))}</div>
      </ProductIdContext.Provider>
    </>
  );
};

export default App;
