'use client'
import React, { useEffect, useState ,Fragment, useContext} from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import {
  ArrowPathIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
  Bars3Icon,
  GiftIcon,
  CpuChipIcon,
  LightBulbIcon,
  ChevronDownIcon,
  KeyIcon,
  ShoppingBagIcon,
  PlayCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import SingleApis from '../_utils/SingleApis';
import { CartContext } from '../_context/CartContext';
import { UserButton, useUser } from '@clerk/nextjs';
import CartApis from '../_utils/CartApis';
function Header() {
  const {cart,setCart} = useContext(CartContext)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useUser();
  useEffect(()=>{
    user && getCartItems();
  },[user])
  
const getCartItems = ()=>{
  CartApis.getUserCartItem(user.primaryEmailAddress.emailAddress).then(res=>{
    console.log('cartitems',res?.data?.data)
    res?.data?.data.forEach(citem => {
      setCart((oldCart)=>[
        ...oldCart,{
  id: citem.id,
  product: citem?.attributes?.products?.data[0]
        }
      ])
    });

  })
}


   const [Header, setHeader] = useState(null);
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
  useEffect(() => {
    fetchHeaderData();
  }, []);

  const fetchHeaderData = () => {
    SingleApis.Header()
      .then(res => {
        console.log(res.data.data);
        setHeader(res.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };


  const HeaderSections = [
    { name: Header?.attributes?.DropDown_choice_3, href: '#', icon: SparklesIcon },
    { name: Header?.attributes?.DropDown_choice_5, href: '#', icon: CpuChipIcon},
    { name: Header?.attributes?.DropDown_choice_2, href: '#', icon: LightBulbIcon },
    { name: Header?.attributes?.DropDown_choice_4, href: '#', icon:ShoppingBagIcon },
    { name: Header?.attributes?.DropDown_choice_1, href: '#', icon: GiftIcon },
  ];
  const callsToAction = [
    { name: Header?.attributes?.DropDownButton1, href: '#', icon: MagnifyingGlassIcon },
    { name: Header?.attributes?.DropDownButton2, href: '#', icon: PhoneIcon },
  ]
    function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
   }


 
  const [open, setOpen] = useState(false)
  
  const getTotalAmount =()=>{
    let totalAmount = 0;
    cart.forEach(item=>{
      totalAmount = totalAmount + Number(item?.product?.attributes?.price) 
    })
    return totalAmount
  }
  const notEnough = () => {
    return {
      pointerEvents: 'none',
    };
  };
  const denied = () => {
    return {
      cursor: 'not-allowed',
    };
  };
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
   return (

    <header className="bg-white fixed z-20">
    <nav className="mx-auto flex w-[100vw] items-center justify-between p-4 lg:px-[5vw]" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href='/'>
     
        <Image   
         className=' h-auto w-[80px] hover:animate-pulse'
                  src={homeData?.attributes?.LOGO?.data?.attributes?.url}
                  width={200}
                  height={200}
                />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            Product
            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {HeaderSections.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Features
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Marketplace
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Company
        </a>
      </Popover.Group>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    
    
      {!user ?
        <Link href="/sign-in"  className="btn small filled">
        {Header?.attributes?.Login}
        <ArrowRight/></Link>
        :
        <div className='flex-row justify-center align-middle flex gap-10'>

        <button onClick={() => setOpen(true)} className='text-black relative cursor-pointer'>
<ShoppingBag className='w-[30px] h-[30px] text-primary'/>
<div className='text-white text-xs bg-primary rounded-full p-[7px] w-[30px] h-[30px] text-center font-extrabold absolute start-[14px] top-[14px]'>
{cart?.length}
</div></button>


<UserButton afterSignOurUrl="/"/> 





<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-[2vh] end-[2vh] flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                  <div className="rounded-2xl overflow-x-hidden flex h-[95vh]  flex-col  bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart?.map((item) => (
                              <li key={item?.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={item?.product?.attributes?.banner?.data?.attributes?.url}
                                    alt={'product'}
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                      <Link href={`/product-Details/${item?.product?.id}`} className='line-clamp-2'>{item?.product?.attributes?.title}</Link>
                                      </h3>
                                      <p className="ml-4">{item.price}</p>
                                    </div>
                   
                                    <p className="mt-1 text-xs font-bold text-gray-400 line-clamp-1">{item?.product?.attributes?.description}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500 text-base  font-bold">
                                    {item?.product?.attributes?.price}{pageData?.attributes?.WebsiteCurrency}
                                    </p>

                                    <div className="flex">
                                      <button
                                       onClick={() => deleteCartItemFromList(item?.id)}
                                        className="font-medium text-primary hover:text-primary"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-black text-gray-900">
                        <p>Subtotal</p>
                        <p>{getTotalAmount()}{pageData?.attributes?.WebsiteCurrency}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6"   style={ getTotalAmount() === 0 ? denied() : null}>
                        <Link href={'/check-out'}
                          style={ getTotalAmount() === 0 ? notEnough() : null}
                          className="flex items-center justify-center rounded-2xl border border-transparent filled px-6 py-3 text-base font-medium text-white shadow-sm "
                        >
                          Checkout ({cart?.length})
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-primary hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>









</div>
    }
   



      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...HeaderSections, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Company
              </a>
            </div>
            <div className="py-6">

                {!user ?
        <Link href="/sign-in"  className="btn small filled">
        {Header?.attributes?.Login}
        <ArrowRight/></Link>
        :
        <div className='flex-row justify-center align-middle flex gap-8'>
        <button onClick={() => setOpen(true)} className='text-black relative cursor-pointer'>
<ShoppingBag className='w-[23px] h-[23px] m-[5px] text-primary'/>
<div className='text-white text-xs bg-primary rounded-full p-[6px] w-[30px] h-[30px] text-center font-extrabold absolute start-[19px] top-[19px]'>
{cart?.length}
</div></button>


<UserButton afterSignOurUrl="/"/> </div>
    }
   
   
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>

  )
}

export default Header