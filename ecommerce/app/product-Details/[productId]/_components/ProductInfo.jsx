'use client'
import React, { useContext } from 'react'
import { ShoppingBag, Star } from 'lucide-react';
import SkeletonProductInfo from './SkeletonProductInfo'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import CartApis from '../../../_utils/CartApis'
import { CartContext } from '../../../_context/CartContext'
export default function ProductInfo({ product , pageData}) {
    const { user } = useUser();
	const router = useRouter();
	const { cart, setCart } = useContext(CartContext)
	const handleAddToCart = () => {
		if (!user) {
			router.push('/sign-in')
		} else {
			/*logic to add to cart*/
			const data = {
				data: {
					username: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					products: [product?.id]
				}
			}
			CartApis.addToCart(data).then(res => {
				console.log('cart created successfully', res.data.data)
				setCart(oldCart => [
					...oldCart,
					{
						id: res?.data?.data?.id,
						product
					}
				])
			}).catch(error => {
				console.log('error', error)
			})
		}
	}
  return (

<>
{product?.id ?
<>
<div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">

<h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product?.attributes?.title}</h1>


<p className="my-2 text-sm font-medium text-gray-500">{product?.attributes?.Category}</p>



 <div className="mt-5 flex items-center">
   <div className="flex items-center">
<Star className='star'/><Star className='star'/><Star className='star'/><Star className='star'/><Star className='star'/>
   </div>
 </div>

 <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
 <div className="mt-3 flex select-none flex-wrap items-center gap-1">
   <label className="">
     <input type="radio" name="type" value="Powder" className="peer sr-only" checked />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
   </label>
   <label className="">
     <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
   </label>
   <label className="">
     <input type="radio" name="type" value="Groud" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Groud</p>
   </label>
 </div>

 <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
 <div className="mt-3 flex select-none flex-wrap items-center gap-1">
   <label className="">
     <input type="radio" name="subscription" value="4 Months" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">4 Months</p>
     <span className="mt-1 block text-center text-xs">$80/mo</span>
   </label>
   <label className="">
     <input type="radio" name="subscription" value="8 Months" className="peer sr-only" checked />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">8 Months</p>
     <span className="mt-1 block text-center text-xs">$60/mo</span>
   </label>
   <label className="">
     <input type="radio" name="subscription" value="12 Months" className="peer sr-only" />
     <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">12 Months</p>
     <span className="mt-1 block text-center text-xs">$40/mo</span>
   </label>
 </div>

 <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
   <div className="flex items-end">
  
          <h1 className="text-3xl font-bold">
      {product?.attributes?.price}       
     {pageData?.attributes?.WebsiteCurrency}
     </h1>
 

   </div>



   <button onClick={() => handleAddToCart()} className="btn filled noanim w-full sm:w-fit">
 <ShoppingBag className='me-2'/>
     {pageData?.attributes?.addtocart}
   </button>

 </div>

 <ul className="mt-8 space-y-2">
   <li className="flex items-center text-left text-sm font-medium text-gray-600">
     <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
     </svg>
     {pageData?.attributes?.advantage1}
   </li>

   <li className="flex items-center text-left text-sm font-medium text-gray-600">
     <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
     </svg>
     {pageData?.attributes?.advantage2}
   </li>
 </ul>
</div>


   <div className="lg:col-span-3">
     <div className="border-b border-gray-300">
       <nav className="flex gap-4">
         <p className="hover:cursor-pointer border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
         {pageData?.attributes?.describtionTab}
          </p>

        
       </nav>
     </div>

     <div className="mt-8 flow-root sm:mt-12">
       <h1 className="text-3xl font-bold">{pageData?.attributes?.DescribtionRow1}</h1>
       <p className="mt-4">{product?.attributes?.description}</p>

       <h1 className="mt-8 text-3xl font-bold">{pageData?.attributes?.DescribtionRow2}</h1>
       <p className="mt-4">{product?.attributes?.body}</p>
     
     </div>
   </div>
   </>
   :
   <SkeletonProductInfo/>
   }
</>





  )
}
