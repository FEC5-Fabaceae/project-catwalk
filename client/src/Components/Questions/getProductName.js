import { useContext } from 'react';
import axios from 'axios';
import ProductIdContext from '../Context';

const GetProductName = () => {
  const value = useContext(ProductIdContext);
  axios.get(`/products/${value}`)
    .then((res) => res.data.name)
    .catch((err) => console.log(err));
};

export default GetProductName;
