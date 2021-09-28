import { Dialog } from "@headlessui/react";
import { Product } from "../../data/products";
import { ProductOrder } from "../../lib/cart-reducer";
import { Customizations } from "./Customizations";

export const ModalContent = ({ product, setOrder, order }: { product: Product, order: ProductOrder, setOrder: (order: ProductOrder) => void }) => (
    <>
      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
        {product.name}
      </Dialog.Title>
      {/* <h2>{product.price.toFormattedString()}</h2> */}
      <p className="text-sm text-gray-500 mt-1">
        {product.description}
      </p>
      <div className="mt-3 pt-3 border-t max-modal-scrollable-height overflow-y-auto">
        <Customizations customizations={product.options} product={product} order={order} setOrder={setOrder} />
      </div>
    </>
  )
