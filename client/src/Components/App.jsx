import React, { useContext, useState, useMemo } from 'react';
import Overview from './Overview/Overview';
import RelatedProductsList from './Related Products/RelatedProductsList';
import OutfitProductsList from './Related Products/OutfitList';
import Reviews from './Review/Reviews';
import QuestionAndAnswer from './Questions/QuestionAndAnswer';
import ProductIdContext from './Context';

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
        <div><Overview /></div>
        <div><RelatedProductsList /></div>
        <div><OutfitProductsList /></div>
        <div><QuestionAndAnswer /></div>
        <div><Reviews /></div>
      </ProductIdContext.Provider>
    </>
  );
};

export default App;
