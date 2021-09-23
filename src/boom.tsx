import React from 'react'
import { products } from './data/products'

export function Boom() {
  return (
      <div className="pt-4">
          <div className="grid gap-2 mb-8 md:grid-cols-1 lg:grid-cols-2 ltr md:rtl">
              <React.Fragment>
                    {products.map((product) => (
                      <a href="#" key={product.id} className="relative flex flex-row-reverse md:flex-row lg:flex shadow-sm rounded border rounded hover:shadow-md ltr">
                        <div className="px-2 py-4 sm:py-10 min-w-0 flex-1 lg:flex lg:flex-col">
                          <div className="lg:flex-1">
                              <div>
                                <h4 className="font-medium text-gray-900">{product.name}</h4>
                                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                              </div>
                          </div>
                        </div>
                        <div className="ml-0 sm:mr-4 flex-shrink-0 sm:m-0  sm:order-first">
                          {product.imageSrc && <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 object-center object-cover h-full max-h-32 md:max-h-40" //
                          />}
                        </div>
                        <div className="absolute top-2 left-2 py-1 px-1 text-sm lg:text-base font-bold bg-white text-gray-800 rounded bg-opacity-75">{product.price}</div>
                      </a>
                    ))}
              </React.Fragment>
          </div>
      </div>
  )
}
