import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddPhotos = (props) => {
  const { imagesState } = props;
  const [imageURL, setImageURL] = useState('');

  const inputChange = (e) => {
    setImageURL(e.target.value);
  };

  const AddImages = (e) => {
    e.preventDefault();
    if (imagesState.length < 5) {
      imagesState.push(imageURL);
    }
  };

  return (
    <>
      <h2>Add Photos</h2>
      Enter URL:
      <input
        className="photo-input"
        type="text"
        onChange={inputChange}
      />
      <button className="photo-input-button" type="submit" onClick={AddImages}>Add</button>
    </>
  );
};

AddPhotos.propTypes = {
  imagesState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddPhotos;
