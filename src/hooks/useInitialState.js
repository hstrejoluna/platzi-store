import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:3000/api/v1';

const useInitialState = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return {
    products,
  };
};

export default useInitialState;
