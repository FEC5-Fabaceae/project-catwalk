import React, { useState, useMemo, lazy, Suspense } from 'react';
import withInteractionsTracker from './InteractionsTracker';
import Overview from './Overview/Overview';
import ProductIdContext from './Context';
import Navbar from './Navbar';
import ProviderState from './Context/provider/ProviderState';

const RelatedProductsList = lazy(() => import('./Related Products/RelatedProductsList'));
const OutfitProductsList = lazy(() => import('./Related Products/OutfitList'));
const Reviews = lazy(() => import('./Review/Reviews'));
const QuestionAndAnswer = lazy(() => import('./Questions/QuestionAndAnswer'));

// please add your components here in the order they appear
const renderLoader = () => <p>Loading</p>;

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
          <Suspense fallback={renderLoader()}>
            <div>{React.createElement(withInteractionsTracker(RelatedProductsList))}</div>
            <div>{React.createElement(withInteractionsTracker(OutfitProductsList))}</div>
          </Suspense>
          <Suspense fallback={renderLoader()}>
            <div>{React.createElement(withInteractionsTracker(QuestionAndAnswer))}</div>
            <div>{React.createElement(withInteractionsTracker(Reviews))}</div>
          </Suspense>
        </ProviderState>
      </ProductIdContext.Provider>
    </>
  );
};

export default App;
