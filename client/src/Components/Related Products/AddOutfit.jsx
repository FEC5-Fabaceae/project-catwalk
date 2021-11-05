import React, { useState, useEffect } from 'react';

const axios = require('axios');

const AddOutfit = (props) => {
  const { product, arrayOfOutfits, setArray } = props;
  const updateArray = () => {
    let isFound = false;
    for (let i = 0; i < arrayOfOutfits.length; i += 1) {
      if (product === arrayOfOutfits[i]) {
        isFound = true;
      }
    }
    if (!isFound) {
      setArray(() => [...arrayOfOutfits, product]);
    }
  };

  return (
    <li className="carousel-card">
      <i className="far fa-plus-square" type="button" onClick={(e) => {updateArray()}} />
      <p>Add Current Product To Outfit</p>
    </li>
  );
};

export default AddOutfit;
