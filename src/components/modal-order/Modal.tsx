/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ReactElement, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Product } from '../../data/products'
import { getPriceForSingleOrder, OrderOption, ProductOrder, State } from '../../lib/cart-reducer'
import { Price } from '../../lib/price'
import { ModalContent } from './ModalContent'

export function Modal({ open, closeModal, imageSrc, imageAlt, children }: { children: ReactElement, open: boolean, closeModal: any, imageSrc?: string, imageAlt?: string }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0" onClose={closeModal}>
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
              {imageSrc &&
                <div className="w-full h-52 ml-0 sm:mr-4 flex-shrink-0 sm:m-0  sm:order-first">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-center object-cover" //
                  />
                </div>}
              <div className="absolute top-0 left-0 pt-4 pl-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => closeModal()}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
                {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
