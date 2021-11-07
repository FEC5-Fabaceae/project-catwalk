/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import axios from 'axios';

const getProducts = (id = 4038) => {
  axios.get(`/products/${id}/styles`)
    .then((res) => {
      console.log('current', res);
      this.setState({
        currentStyle: res.data.results[0],
        text: res.data.results[0].name,
        styleid: id,

      });
    })
    .catch((err) => {
      throw (err);
    });
  axios.get('/products')
    .then((res) => {
      console.log('PRODUCTS', res);
      this.setState({
        product: res.data,
      });
    })
    .catch((err) => {
      throw (err);
    });
};

class ProductInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      currentStyle: [],
      product: [],
      styleid: [],
      name: [],
      text: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getProducts();
  }

  handleClick(e) {
    console.log('thumbnail click', e.target);
  }

  render() {
    const {
      currentStyle, product, styleid, itemName, text,
    } = this.state;

    return (
      <>
        <div className="star-rating-row">☆☆☆☆☆</div>
        <div className="star-rating-row">
          {product && product.map((item) => (
            item.id === styleid
              ? <div>{item.category}</div> : <div />

          )) }
        </div>
        <div className="star-rating-row">
          {product && product.map((item) => (
            item.id === styleid
              ? <h1>{item.name}</h1> : <h4>{itemName}</h4>
          )) }

        </div>
        <div>
          {product && product.map((item) => (
            item.id === styleid
              ? <div>{item.default_price}</div> : <></>
          )) }
        </div>
        <div className="star-rating-row">
          <b>
            STYLE
            {'>'}
          </b>
          <div className="name-of-selected-style">
            {text}
          </div>
        </div>
        <div className="style-select-icon-container">
          {currentStyle.photos && currentStyle.photos.map((photo) => (
            <>
              <img
                id={photo.url}
                className="style-icon"
                src={photo.thumbnail_url}
                style={{ height: '49px', width: '49px' }}
                alt="clothing"
                onClick={(e) => { this.handleClick(e); }}
              />
            </>
          ))}
        </div>
        <div style={{ padding: '10px' }}>
          <select className="select-style-drop-list">
            {currentStyle.skus && Object.keys(currentStyle.skus).map((key) => (
              <option value={currentStyle[key].size}>{currentStyle[key].size}</option>
            // <option value="medium">medium</option>
            // <option value="Large">large</option>
            ))}
          </select>
        </div>
      </>
    );
  }
}
export default ProductInfo;
