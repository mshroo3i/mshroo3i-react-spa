import Image from "next/image";
import { Price } from "../../lib/price";
import { Product } from "../../types";

export const ProductItem = ({ product, onClick, displayPrice = false }: { product: Product, onClick: any, displayPrice?: boolean }) => {
  let productAndNameColSpan = 'col-span-6'
  if ((product.imageSrc && !displayPrice) || (!product.imageSrc && displayPrice)) {
    productAndNameColSpan = 'col-span-9'
  } else if (product.imageSrc && displayPrice) {
    productAndNameColSpan = 'col-span-6'
  } else {
    productAndNameColSpan = 'col-span-12'
  }

  return (
      <button onClick={onClick} key={product.id} className="flex text-right mt-2 text-sm font-medium text-gray-500 border rounded border-gray-200">
        <li key={product.id} className="grow grid grid-cols-12 p-2 space-x-3 space-x-reverse">
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
          {displayPrice && <p className={`font-medium text-gray-900 py-4 text-left col-span-3`}>{(new Price(product.price)).toFormattedString()}</p>}
        </li>
        {/* <div className="absolute top-2 left-2 py-1 px-1 text-sm lg:text-base font-bold bg-white text-gray-800 rounded bg-opacity-75">{product.price.toFormattedString()}</div> */}
      </button>
  )
}