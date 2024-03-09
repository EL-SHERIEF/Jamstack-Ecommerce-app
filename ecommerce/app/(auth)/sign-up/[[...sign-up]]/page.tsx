'use client'
import { SignUp } from "@clerk/nextjs";

import React, { useEffect, useState } from 'react'
import SingleApis from '../../../_utils/SingleApis';
 import Link from "next/link";
 import Image from 'next/image';
export default function Page() {
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

 


  return (


<section className="bg-white fixed top-0 left-0 w-[100%] h-[100%] z-40">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12 flex-1 flex-row content">
  
  {homeData?.attributes?.signimage ? 
   <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-[98%] xl:col-span-6 rounded-2xl mx-3 my-0 overflow-hidden sm:my-3">
    <Image alt='sign'
      src={homeData?.attributes?.signimage?.data?.attributes?.url}
      width={1200}
      height={1200}
      className="absolute inset-0 h-full w-full object-cover opacity-80"
      />



      <div className="hidden lg:block lg:p-12 z-10">
   
          <Link href={'/'}>
          <Image alt='sign'
      src={homeData?.attributes?.LOGO?.data?.attributes?.url}
      width={500}
      height={500}
      className=" inset-0 h-[90px] w-[100px] object-cover top-[0] absolute start-[42px] brightness-[1000%]"
      />
          </Link>


        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
      {homeData?.attributes?.signuptext}
        </h2>

        <p className="mt-4 leading-relaxed text-white/90 pe-[10vw]">
        {homeData?.attributes?.signtext}
        </p>
      </div>
    </section>
  :
  <section className="relative flex h-32 items-end bg-primary lg:col-span-5 lg:h-[98%] xl:col-span-6 rounded-2xl mx-3 my-0 overflow-hidden sm:my-3">
  <div className="absolute inset-0 h-full w-full object-cover opacity-80 bg-primary animate-pulse"
    ></div>



    <div className="hidden lg:block lg:p-12 z-10">
 
          <div className=" inset-0 h-[40px] w-[100px] object-cover top-[30px] absolute start-[42px] brightness-[1000%] text-slate-200 bg-slate-200 animate-pulse"></div>



      <h2 className="mt-6 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-200 bg-slate-200 animate-pulse">
      skeleton skeleton skele skele 
      </h2>

      <p className="mt-4 leading-relaxed pe-[10vw] text-slate-200 bg-slate-200 animate-pulse">
    skeleton skeleton skele skele     skeleton skeleton skele skele    skeleton skeleton skele skele
      </p>
    </div>
  </section>}
  
   

    <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
      <div className="max-w-xl lg:max-w-3xl ">
      {homeData?.attributes?.signimage ? 
  <div className="relative -mt-16 block lg:hidden pb-24">
        <Link href={'/'}   className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20">
          <Image alt='sign'
      src={homeData?.attributes?.LOGO?.data?.attributes?.url}
      width={200}
      height={200}
      className="h-24 sm:h-10 object-contain"
      />
          </Link>


          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          {homeData?.attributes?.signuptext}
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
          {homeData?.attributes?.signtext}
          </p>
        </div>
      :
      <div className="relative -mt-16 block lg:hidden pb-24">
      <div   className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20">
        <div className="h-24 sm:h-10 object-contain text-slate-200 bg-slate-200 animate-pulse"
    ></div>
        </div>


        <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl text-slate-200 bg-slate-200 animate-pulse">
        skeleton skeleton skeleton
        </h1>

        <p className="mt-4 leading-relaxed text-slate-200 bg-slate-200 animate-pulse">
       skeleton skeleton skeleton skeleton skeleton skeleton
        </p>
      </div>
}
      

       <SignUp/>
      </div>
    </main>
  </div>
</section>
  )
}