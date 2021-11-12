import React, { useState, useEffect, useContext } from 'react';
import ProductIdContext from '../Context';
import Feature from './Feature';

const axios = require('axios');

const Comparison = (props) => {
  const context = useContext(ProductIdContext);
  // get all of the information from the parent component about related product
  let commonFeatures = [];
  const { relatedProductInfo } = props;
  const [currentProductInfo, setCurrentProduct] = useState({ name: '', category: '', features: [] });
  const [commonFeaturez, setCommonFeatures] = useState(relatedProductInfo.features);
  // set a use effect for when the app loads
  useEffect(() => {
    // make an axios request to get the feature information
    axios.get(`http://localhost:3000/products/${context.productID}`)
      .then((data) => {
        // set the currentProductInfo to the result
        const currentProduct = data.data;
        const { name, category, features } = currentProduct;
        setCurrentProduct({ name, category, features });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // set a use effect for when the context changes
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${context.productID}`)
      .then((data) => {
        // set the currentProductInfo to the result
        const currentProduct = data.data;
        const { name, category, features } = currentProduct;
        setCurrentProduct({ name, category, features });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [context]);
  // set a use effect for when currentProductInfo updates
  // render the information (try using flexbox for this)
  return (
    <div>
      <h4>Comparing</h4>
      <div className="first-comparison">{currentProductInfo.name}</div>
      <div className="second-comparison">{relatedProductInfo.name}</div>
      {currentProductInfo.features.map((featureObj) => {
        // {feature: value:}
        // set relatedValue to null
        let relatedValue = null;
        // set relatedProductInfo.features to relatedFeatures
        const relatedFeatures = relatedProductInfo.features;
        // look at all relatedFeatures indices, and find if a matching feature exists.
        for (let i = 0; i < relatedFeatures.length; i += 1) {
          // If it does, set relatedValue to it and add the feature to an array of common features
          if (relatedFeatures[i].feature === featureObj.feature) {
            relatedValue = relatedFeatures[i].value;
            commonFeatures.push(featureObj.feature);
          }
        }
        // call the Feature component, passing in the currentProductInfo's value at the current feature, the feature in question, and the related value as props
        return (<Feature currentProductValue={featureObj.value} relatedProductValue={relatedValue} feature={featureObj.feature} />);
      })}
      {relatedProductInfo.features.map((featureObj) => {
        // set a shouldRender var to true
        let shouldRender = true;
        // look at the commonFeatures array, and if the current feature does not exist inside it, then render a new feature
        for (let i = 0; i < commonFeatures.length; i += 1) {
          if (featureObj.feature === commonFeatures[i]) {
            shouldRender = false;
          }
        }
        if (shouldRender) {
          // call the Feature component, passing in the currentProductInfo's value at the current feature, the feature in question, and the related value as props
          return (<Feature currentProductValue={null} relatedProductValue={featureObj.value} feature={featureObj.feature} />);
        }
      })}
    </div>
  );
};

export default Comparison;
