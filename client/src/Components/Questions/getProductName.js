import { useContext } from 'react';
import axios from 'axios';
import ProductIdContext from '../Context';

const GetProductName = () => {
  const value = useContext(ProductIdContext);
  let productName;
  axios.get(`/products/${value}`)
    .then((res) => {
      productName = res.data.name;
    })
    .catch((err) => console.log(err));
  return productName;
};

export default GetProductName;
