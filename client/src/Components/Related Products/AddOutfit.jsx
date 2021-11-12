import React, { useState, useEffect } from 'react';

const AddOutfit = ({ product, arrayOfOutfits, setArray }) => {
  const updateArray = () => {
    let isFound = arrayOfOutfits.includes(product);
    if (!isFound) {
      setArray(() => [...arrayOfOutfits, product]);
    }
  };

  return (
    <li className="carousel-card">
      <i className="far fa-plus-square" type="button" onClick={updateArray} />
      <p className="add-product-card">Add Product To Outfit</p>
    </li>
  );
};

export default AddOutfit;
