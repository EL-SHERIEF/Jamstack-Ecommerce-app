import React from 'react'
import Image from 'next/image'
export default function ProductBanner({ product }) {
  return (
    <>
    {product?.attributes?.banner?.data?.attributes?.url ?
        <div className="lg:flex lg:items-start">
      <div className="lg:order-2 lg:ml-5">
      <div className="max-w-xl overflow-hidden rounded-lg">

     
              <Image
                  src={product?.attributes?.banner?.data?.attributes?.url}
                  alt="Image Description"
                  width={900}
                  height={900}
                  className="h-full w-full max-w-full object-cover" />  

          
            </div>
      
      </div>

      <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
        <div className="flex flex-row items-start lg:flex-col">
          <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center sm: mx-2 lg:mx-0">
            <Image
                  src={product?.attributes?.banner?.data?.attributes?.url}
                  alt="Image Description"
                  width={900}
                  height={900}
                  className="h-full w-full max-w-full object-contain" /> 
       
        
      
      
          </button>
        </div>
      </div>
    </div>

:
<div className="lg:flex lg:items-start">
    <div className="lg:order-2 lg:ml-5">
    <div className="max-w-xl overflow-hidden rounded-lg">


      <div className='bg-slate-200 animate-pulse w-[40vw] h-[600px] text-slate-200  sm: h-[450px] sm: w-[90vw]'></div>

        
          </div>
    
    </div>

    <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
      <div className="flex flex-row items-start lg:flex-col">
        <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center sm: mx-2 lg:mx-0">
        <div className='bg-slate-200 animate-pulse w-full h-full text-slate-200'></div>
      
    
    
        </button>
      </div>
    </div>
  </div>

}
</>

  )
}
