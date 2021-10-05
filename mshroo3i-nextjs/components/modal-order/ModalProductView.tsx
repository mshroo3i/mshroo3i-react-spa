import { Dialog } from "@headlessui/react";
import { ReactElement } from "react";
import { getPriceForSingleOrder, ProductOrder } from "../../lib/cart-reducer";

export const ModalProductView = ({  order,children, onAdd }: { children: ReactElement, order: ProductOrder, onAdd: (order: ProductOrder) => void }) => {
  const product = order.product
  const price = getPriceForSingleOrder(order).toFormattedString();

  return (
    <>
      <div className="sm:flex sm:items-start px-4 pt-1 sm:p-6">
        <div className="w-full mt-3 text-right sm:mt-0">
          <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
            {product.name}
          </Dialog.Title>
          {/* <h2>{product.price.toFormattedString()}</h2> */}
          <p className="text-sm text-gray-500 mt-1">
            {product.description}
          </p>
          <p className="text-sm font-medium text-gray-900 mt-1">
            {price}
          </p>
          <div className="mt-3 pt-3 border-t max-modal-scrollable-height overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
      <div className="mx-4 mt-5 sm:mt-1 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-between rounded-md border border-transparent shadow-sm px-2 py-1 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
          onClick={() => onAdd(order)}//onAddToCart()}
        >
          <div>{price}</div>
          <div>أضف للسلة</div>
        </button>
      </div>
    </>
  )
}
