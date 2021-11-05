/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      display: [],
      thumbnails: [],
      currentStyle: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(id = 40348) {
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        console.log(res);
        this.setState({
          display: res.data.results[0].photos[0].url,
          currentStyle: res.data.results[0],
        });
      })
      .catch((err) => {
        throw (err);
      });
  }

  handleClick(e) {
    console.log('HANDLE GALLERY IMAGE CLICK', e.target.id);
    this.setState({
      display: e.target.id,
    });
  }

  render() {
    const { display, currentStyle } = this.state;
    return (
      <>
        <div className="gallery-wrapper">
          <div className="viewer-wrap">
            <img src={display} alt="clothing" className="gallery-image" />
          </div>
          <div className="thumbnail-gallery">
            <div className="thumbnail-images">
              {currentStyle.photos && currentStyle.photos.map((photo) => (
                <>
                  <img
                    src={photo.thumbnail_url}
                    onClick={(e) => { this.handleClick(e); }}
                    id={photo.url}
                    style={{ height: '49px', width: '49px' }}
                    alt="clothing"
                  />
                </>
              ))}
            </div>
            gallery
          </div>
        </div>

      </>
    );
  }
}
export default Gallery;
