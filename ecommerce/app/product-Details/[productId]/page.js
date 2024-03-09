'use client'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import ProductApis from '../../../app/_utils/ProductApis';
import SingleApis from '../../../app/_utils/SingleApis';
import BreadCrumbs from '../../../app/_components/BreadCrumbs';

import ProductList from '../../../app/_components/ProductList';
import { usePathname } from 'next/navigation';

import ProductBanner from './_components/ProductBanner'
import ProductInfo from './_components/ProductInfo'

export default function ProductItem({ params }) {

  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = () => {
    SingleApis.DetailsPage()
      .then(res => {
        console.log(res.data.data);
        setPageData(res.data.data);
      })
  };




  const path = usePathname();
  const [productDetails, setProductDetails] = useState({});
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);
  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId).then((res) => {
      console.log("product item ", res.data.data);
      setProductDetails(res.data.data);
      getProductListByCategory(res.data.data);
    });
  };

  const getProductListByCategory = (product) => {
    ProductApis.getProductsByCategory(product?.attributes.Category).then(
      (res) => {
        console.log(res?.data?.data);
        setProductList(res?.data?.data);
      }
    );
  };
  



  
  return (
    
<section className="py-12 sm:py-16 w-[98vw] sm:w-[83vw]"> 
 

 <div className="container mx-auto px-4  my-24">
  <BreadCrumbs path={path} mainbreadCrumb={pageData?.attributes?.BreadCrumbMainLink}  lastbreadCrumb={productDetails?.attributes?.title}/>

<div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 mb-[130px]">

<div className="lg:col-span-3 lg:row-end-1">
  <ProductBanner  product={productDetails} />
  </div>
<ProductInfo  product={productDetails}  pageData={pageData}/>
    </div>
  </div>

 


  <ProductList productList={productList}  header={pageData?.attributes?.SimilarProductsHeader} currency={pageData?.attributes?.WebsiteCurrency}/>
</section>
  )
}

