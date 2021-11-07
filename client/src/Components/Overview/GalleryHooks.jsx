/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
import React, { useContext, useState } from 'react';
// import ProductIdContext from '../Context';
import ProviderContext from '../Context/provider/ProviderContext';

const GalleryHooks = () => {
  const productContext = useContext(ProviderContext);
  const { currentStyle } = productContext;
  const [page, setPage] = useState(0);
  // const [display, setDisplay] = useState([]);

  const handleClick = (e) => {
    // setDisplay(e.target.id);
    // console.log(e.target.name);
    setPage(Number(e.target.name));
  };

  const handlePageChange = (e) => {
    if (e.target.name === 'back') {
      if (page === 0) {
        // setPage(length);
        setPage(currentStyle.photos.length - 1);
      } else {
        setPage(page - 1);
      }
    } else if (page === currentStyle.photos.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  if (!currentStyle) {
    return <p>No style selected</p>;
  }
  return (
    <>
      <div className="gallery-wrapper">
        <div className="viewer-wrap">
          <p name="back" onClick={handlePageChange}>
            <b>

              {'<'}
            </b>
          </p>
          {currentStyle.photos && currentStyle.photos.map((photo, i) => {
            if (page === i) {
              return (
                <img src={photo.url} alt="clothing" className="gallery-image" />
              );
            }
          })}
          <p name="forward" onClick={handlePageChange}>
            <b>
              {'>'}
            </b>
          </p>
          {/* { currentStyle.photos && <img src={currentStyle.photos[0].url} /> } */}
        </div>
        <div className="thumbnail-gallery">
          <div className="thumbnail-images">
            {currentStyle.photos && currentStyle.photos.map((photo, i) => (
              <>
                <img
                  name={i}
                  src={photo.thumbnail_url}
                  onClick={handleClick}
                  id={photo.url}
                  style={{ height: '49px', width: '49px' }}
                  alt="clothing"
                />
              </>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default GalleryHooks;
