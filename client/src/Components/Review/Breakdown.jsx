import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ProductIdContext from '../Context';
import RatingBreakdown from './RatingBreakdown';

const Breakdown = () => {
  const context = useContext(ProductIdContext);
  const { productID, setProductID } = context;
  const [metadata, setMetadata] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const getMetadata = () => {
    const response = axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: productID,
      },
    });
    return response;
  };

  useEffect(() => {
    getMetadata()
      .then((response) => {
        setMetadata(response.data);
        setLoaded(true);
      });
  }, [isLoaded]);

  if (isLoaded) {
    return (
      <aside>
        <RatingBreakdown ratings={metadata.ratings} />
      </aside>
    );
  } return (<aside>Loading...</aside>);
};

export default Breakdown;
