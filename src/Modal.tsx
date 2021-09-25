/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { products, Customization } from './data/products'

const product = products[0];

const Customizations = ({ customizations }: { customizations: Customization[] }) => (
    <div className="flex flex-col gap-y-5">
    {customizations.map(c => (
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline px-1 rtl">
        <div>
          <div
            className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
            id="label-notifications"
          >
            {c.description}
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="max-w-lg">
            <div className="mt-4 space-y-4">
              {c.choices.map(choice => (
                <div className="flex items-center">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                  />
                  <label htmlFor="push-everything" className="mx-3 block text-sm  font-normal text-gray-700">
                    {choice.text} {choice.price.toFormattedString()}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    ))}
    </div>

)

const ModalContent = () => (
  <>
    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
      {product.name}
    </Dialog.Title>
    {/* <h2>{product.price.toFormattedString()}</h2> */}
    <p className="text-sm text-gray-500 mt-1">
      {product.description}
    </p>
    <div className="mt-3 pt-3 border-t max-modal-scrollable-height overflow-y-auto">
      <Customizations customizations={product.options} />
    </div>
  </>
)


export function Modal() {
  const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0" onClose={setOpen}>
        <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="bg-gray-50 inline-block w-full align-bottom bg-white rounded-lg px-0 pt-0 pb-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:pt-0 sm:px-0">
              <div className="w-full h-52 ml-0 sm:mr-4 flex-shrink-0 sm:m-0  sm:order-first">
                {product.imageSrc && <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover" //
                />}
              </div>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="sm:flex sm:items-start px-4 pt-1 sm:p-6">
                <div className="w-full mt-3 text-right sm:mt-0">
                  <ModalContent />
                </div>
              </div>
              <div className="mx-4 mt-5 sm:mt-1 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  أضف إلى الطلب {product.price.toFormattedString()}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
