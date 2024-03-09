'use client'
import React, { useEffect, useState , useContext} from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm'
import SingleApis from '../_utils/SingleApis';
import { CartContext } from '../_context/CartContext'
import CartApis from '../_utils/CartApis'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
export default function checkOut() {
  const getTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += Number(item?.product?.attributes?.price);
    });
    return totalAmount;
};

const getCheckoutPrice = () => {
  let totalAmount = getTotalAmount(); // Call getTotalAmount function to get the total amount
  let deliveryFees = Number(pageData?.attributes?.deliveryfees);
    let checkoutPrice = totalAmount + deliveryFees;
    return checkoutPrice;
};


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
    
    const router = useRouter();
	const { cart, setCart } = useContext(CartContext)

	const deleteCartItemFromList = (id) => {
		CartApis.deleteCartItem(id).then((res) => {
			if (res) setCart((oldCart) => oldCart.filter(item => item.id !== res?.data?.data?.id))
		}).catch(error => {
			console.log('error', error)
		})
	}


  
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

    

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 100,
};

  
  return (


  
    <div className='py-[14vh]'>
      
        <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" className="text-2xl font-bold text-gray-800">sneekpeeks</a>
  <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div className="relative">
      <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </a>
          <span className="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span className="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li className="flex items-center space-x-3 text-left sm:space-x-4">
          <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span className="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8 lg:w-[40vw]">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
    {cart?.map((item) => (
        <div className="flex flex-col rounded-lg bg-purple-50 sm:flex-row relative">
        <Image className="m-2 h-auto w-28 rounded-md border object-cover object-center"
        width={200} height={200} 
        src={item?.product?.attributes?.banner?.data?.attributes?.url}/>
        <div className="flex w-full flex-col px-4 py-4">
        <Link href={`/product-Details/${item?.product?.id}`} className='line-clamp-2 font-semibold'>{item?.product?.attributes?.title}</Link>
          <span className="float-right text-gray-400">{item?.product?.attributes?.Category}</span>
        <div className='w-full flex flex-row justify-between flex-nowrap'>
        <p className="text-lg font-bold w-auto">{item?.product?.attributes?.price} {pageData?.attributes?.WebsiteCurrency}</p>
        <button onClick={() => deleteCartItemFromList(item?.id)}
            className="font-medium text-primary hover:text-primary">Remove</button>
        </div>
        </div>
      </div>
							))}
    </div>

    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-primary absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:shadow  peer-checked:border-primary peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-2xl border border-gray-300 p-4" htmlFor="radio_1">
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span className="peer-checked:border-primary absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:checked:shadow  peer-checked:border-primary peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>
  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={getCheckoutPrice()} currency={'usd'} websitecurrency={pageData?.attributes?.WebsiteCurrency}/>
    </Elements>
    <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Subtotal</p>
          <p className="font-semibold text-gray-900">{getTotalAmount()} {pageData?.attributes?.WebsiteCurrency}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Shipping</p>
          <p className="font-semibold text-gray-900">{pageData?.attributes?.deliveryfees} {pageData?.attributes?.WebsiteCurrency}</p>
        </div>
      </div>
      <div className="my-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900"> {getCheckoutPrice()} {pageData?.attributes?.WebsiteCurrency}</p>
      </div>
  </div>
</div>
    </div>
  )
}
