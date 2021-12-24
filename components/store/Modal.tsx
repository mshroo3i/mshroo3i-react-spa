/* This example requires Tailwind CSS v2.0+ */
import { Fragment, ReactElement } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getImagePathForHero } from '../../lib/imagePath'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export function Modal({ open, closeModal, imageSrc, imageAlt, children }: { children: ReactElement, open: boolean, closeModal: any, imageSrc?: string | StaticImageData, imageAlt?: string }) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-40" onClose={closeModal}>
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
            <div className=" inline-block w-full align-bottom bg-white rounded-lg pb-4 overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 sm:pt-0 sm:px-0">
              <div className='flex flex-col items-end px-4 pt-2'>
                <nav className="my-2" aria-label="Back">
                  <button onClick={() => closeModal()} className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    الرجوع
                    <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </button>
                </nav>
                {imageSrc &&
                  <div className="relative w-full h-52 ml-0 flex-shrink-0 sm:m-0">
                    <Image
                      src={getImagePathForHero(imageSrc as string)}
                      alt={imageAlt}
                      objectFit='cover'
                      layout='fill'
                      className="rounded-md" //
                    />
                  </div>}
              </div>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
