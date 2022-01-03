import { Dialog } from "@headlessui/react";
import { ReactElement } from "react";
import { getPriceForSingleOrder } from "../../../lib/cart-reducer";
import { ProductOrder } from "../../../types";
import Image from 'next/image'
import { getImagePathForHero } from "../../../lib/imagePath";

export const ModalProductView = ({ order, children, onAdd }: { children: ReactElement, order: ProductOrder, onAdd: (order: ProductOrder) => void }) => {
  const product = order.product
  const price = getPriceForSingleOrder(order).toFormattedString();

  return (
    <>
      <div className="sm:flex sm:items-start px-4 pt-1">
        <div className="w-full text-right sm:mt-0">
          <div className="relative w-full h-52 ml-0 flex-shrink-0 sm:m-0">
            {order.product.imageSrc && <Image
              src={getImagePathForHero(order.product.imageSrc as string)}
              alt={order.product.imageAlt}
              objectFit='cover'
              layout='fill'
              className="rounded-md" //
            />}
          </div>
          <Dialog.Title as="h3" className="mt-3 text-lg leading-6 font-medium text-gray-900">
            {product.name}
          </Dialog.Title>
          <p className="text-sm text-gray-500 mt-1">
            {product.description}
          </p>
          <div className="mt-3 pt-3 border-t max-modal-scrollable-height overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      <div className="pb-10 mx-4 mt-5 sm:mt-1 sm:flex relative">
        <button
          type="button"
          className="absolute inset-y-0 left-0 pt-2 ml-2 w-full inline-flex justify-between rounded-md border border-transparent shadow-sm px-2 py-1 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
          onClick={() => onAdd(order)}//onAddToCart()}
        >
          <div className=" font-bold"><span className="ml-3">السعر</span>{price}</div>
          <div>أضف لطلب الاستفسار</div>
        </button>
      </div>
    </>
  )
}
