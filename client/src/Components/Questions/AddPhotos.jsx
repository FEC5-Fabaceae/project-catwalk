import React, { useState } from 'react';

const AddPhotos = (props) => {
  const { imagesState, setImages } = props;
  const [imageURL, setImageURL] = useState('');

  console.log(imagesState);

  const inputChange = (e) => {
    setImageURL(e.target.value);
  };

  const AddImages = () => {
    imagesState.push(imageURL);
    setImages(imagesState);
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

export default AddPhotos;
