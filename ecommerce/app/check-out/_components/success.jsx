import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Particales from "./particals";

export default function Success() {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {showComponent && <Particales/>}

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 t-[40vh] z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >

              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="flex flex-col align-middle items-center justify-center text-center gap-5">
                    <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple-200 sm:mx-0 my-3">
                      <CheckIcon className="h-10 w-10 text-primary" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Success
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Thanks for shoping purple things, we appreciate your love.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-3 w-full relative flex justify-center align-middle">
                  <button
                    type="button" id='party'
                    className="w-[96%] text-sm font-semibold text-white shadow-sm btn filled noanim"
                    onClick={() => setOpen(false) }
                  >
                    Continue
                  </button>
                </div>
              </Dialog.Panel>




            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}