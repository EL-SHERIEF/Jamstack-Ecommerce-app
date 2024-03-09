'use client'
import React, { useEffect, useState, useRef } from 'react';
import ProductApis from '../_utils/ProductApis';
import ProductList,{header} from './ProductList';

export default function ProductSection({header,currency}) {

  
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then(res => {
      console.log(res.data.data);
      setProductList(res.data.data);
    });
  };




  return (

<ProductList productList={productList} header={header} currency={currency}/>

  );
}

