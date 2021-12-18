import Image from "next/image";
import { Price } from "../../lib/price";
import { Product } from "../../types";

export const ProductItem = ({ product, onClick, displayPrice: showPrice = true }: { product: Product, onClick: any, displayPrice?: boolean }) => {
  let productAndNameColSpan = 'col-span-6'
  if ((product.imageSrc && !showPrice) || (!product.imageSrc && showPrice)) {
    productAndNameColSpan = 'col-span-9'
  } else if (product.imageSrc && showPrice) {
    productAndNameColSpan = 'col-span-6'
  } else {
    productAndNameColSpan = 'col-span-12'
  }

  const hasVariant = product.productOptions.some(po => po.options.some(o => o.priceIncrement > 0))

  return (
      <li key={product.id} className="flex text-sm font-medium text-gray-500 border rounded border-gray-200">
        <button onClick={onClick} key={product.id} className="text-right grow grid grid-cols-12 p-2 space-x-3 space-x-reverse">
          {product.imageSrc && <div className="col-span-3"><Image
            src={product.imageSrc}
            alt={product.imageAlt}
            objectFit='cover'
            layout="responsive"
            height={500}
            width={500}
            className="rounded-md"
          /></div>}
          <div className={`space-y-2 pt-4 ${productAndNameColSpan}`}>
            <h3 className="text-gray-900 font-medium">{product.name}</h3>
            <p>{product.description}</p>
          </div>
          {showPrice && <p className={`font-medium text-gray-900 py-4 text-left col-span-3`}>{`${hasVariant ? '+ ' : ''}${Price.toFormattedString(product.price)}`}</p>}
        </button>
      </li>
  )
}