import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ProductIdContext from '../Context';
import RatingBreakdown from './RatingBreakdown';

const Breakdown = () => {
  const productId = useContext(ProductIdContext);
  const [metadata, setMetadata] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const getMetadata = () => {
    const response = axios({
      method: 'get',
      url: '/reviews/meta',
      params: {
        product_id: productId,
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
    console.log(metadata);
    return (
      <aside>
        <RatingBreakdown ratings={metadata.ratings} />
      </aside>
    );
  } return (<aside>Loading...</aside>);
};

export default Breakdown;
