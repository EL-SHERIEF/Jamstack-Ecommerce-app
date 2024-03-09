'use client'
import React, { useEffect, useState } from 'react';
import SingleApis from './_utils/SingleApis';
import Hero from "./_components/Hero";
import ProductSection, {} from "./_components/ProductSection";
import Success from './check-out/_components/success'
export default function Home() {
  const [isSuccessful, setSuccessful] = useState(false)
useEffect(()=>{
  setSuccessful(window.location.href.toString().includes('redirect_status=succeeded'))
},[])


  const [homeData, sethomeData] = useState(null);

  useEffect(() => {
    fetchHomePageData();
  }, []);

  const fetchHomePageData = () => {
    SingleApis.HomePage()
      .then(res => {
        console.log(res.data.data);
        sethomeData(res.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

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
  return (
  <div className="body">
<Hero homeData={homeData}/>
{isSuccessful && (
  <Success/>      
      )}


<ProductSection header={homeData?.attributes?.header_ProductSlider_1} currency={pageData?.attributes?.WebsiteCurrency}/>

  </div>
  );
}
