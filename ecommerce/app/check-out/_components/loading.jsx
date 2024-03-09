import {useState, useEffect } from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function Loading({richingammount,currency}) {


  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showComponent && 
     <div className='w-full h-full fixed top-0 left-0 bg-[#00000071] z-20 cursor-wait'>
      <div className="relative z-10">
  
        <div className="fixed inset-0 t-[40vh] z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div>

              <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="flex flex-col align-middle items-center justify-center text-center gap-5">
                    <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple-200 sm:mx-0 my-3">
                      <ClockIcon className="h-10 w-10 text-primary animate-spin" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                      <h3 className="text-base font-semibold leading-6 text-gray-900">
                        Loading payment
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                       Hang tight friends its me getting {richingammount}{currency} more richer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-3 w-full relative flex justify-center align-middle">
                  <button
                    type="button" id='party'
                    className="w-[96%] text-sm font-semibold text-white shadow-sm btn filled noanim"
                    
                  >
                    Continue
                  </button>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </div>
    
    }

   
    </>
  )
}