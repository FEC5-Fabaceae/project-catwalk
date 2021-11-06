import React, { useState, useEffect, useContext } from 'react';
import Outfit from './Outfit';
import AddOutfit from './AddOutfit';
import ProductIdContext from '../Context';

const axios = require('axios');

// send a get request for each related product from the given product id
// render the default style for each related product

const OutfitProductsList = (props) => {
  const [leftVisible, setLeftVisible] = useState('hidden');
  const [rightVisible, setRightVisible] = useState('visible');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const value = useContext(ProductIdContext);
  const [productID, setProductID] = useState(value);
  const [arrayOfOutfits, setArray] = useState([]);
  const [visibleProducts, setVisible] = useState([arrayOfOutfits.slice(0, 2)]);
  useEffect(() => {
    setVisible(arrayOfOutfits.slice(start, end));
  }, [arrayOfOutfits]);
  const previousSlide = (e) => {
    if (end === arrayOfOutfits.length) {
      setRightVisible('visible');
    }
    if (start - 1 === 0 || arrayOfOutfits.length === 0) {
      setLeftVisible('hidden');
    }
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
      setVisible(arrayOfOutfits.slice(start - 1, end - 1));
    }
  };
  const nextSlide = (e) => {
    console.log(arrayOfOutfits);
    if (start === 0 && arrayOfOutfits.length > 3) {
      setLeftVisible('visible');
    }
    if (end + 1 >= arrayOfOutfits.length) {
      setRightVisible('hidden');
    }
    if (end < arrayOfOutfits.length) {
      setStart(start + 1);
      setEnd(end + 1);
      setVisible(arrayOfOutfits.slice(start + 1, end + 1));
    }
  };
  if (arrayOfOutfits.length > 3) {
    return (
      <div className="carousel-row">
        <h2 className="carousel-title"> Your Outfit </h2>
        <div className="carousel-inner-content">
          <div className="carousel-col carousel-left">
            <i className="fas fa-step-backward" role="button" onClick={previousSlide} style={{ visibility: leftVisible }} />
          </div>
          <div className="carousel-col carousel-center">
            <div className="carousel-viewport">
              <ol className="carousel">
                <AddOutfit product={productID} arrayOfOutfits={arrayOfOutfits} setArray={setArray} />
                {visibleProducts.map((outfitProductID) => (
                  <Outfit product={outfitProductID} />
                ))}
              </ol>
            </div>
          </div>
          <div className="carousel-col carousel-goto-right">
            <i className="fas fa-step-forward" role="button" onClick={nextSlide} style={{ visibility: rightVisible }} />
          </div>
        </div>
      </div>
    );
  }
  if (arrayOfOutfits.length > 0) {
    return (
      <div className="carousel-row">
        <h2 className="carousel-title"> Your Outfit </h2>
        <div className="carousel-inner-content">
          <div className="carousel-col carousel-center">
            <div className="carousel-viewport">
              <ol className="carousel">
                <AddOutfit product={productID} arrayOfOutfits={arrayOfOutfits} setArray={setArray} />
                {visibleProducts.map((outfitProductID) => (
                  <Outfit product={outfitProductID} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="carousel-row">
      <h2 className="carousel-title"> Your Outfit </h2>
      <div className="carousel-inner-content">
        <div className="carousel-col carousel-center">
          <div className="carousel-viewport">
            <ol className="carousel">
              <AddOutfit product={productID} arrayOfOutfits={arrayOfOutfits} setArray={setArray} />
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OutfitProductsList;
