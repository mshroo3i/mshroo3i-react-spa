/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const orders =  [
      {
        id: 1,
        name: '1 Nomad Tumbler',
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect.",
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 2,
        name: '2 Nomad Tumbler',
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect.",
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 2,
        name: '3 Nomad Tumbler',
        description:
          "This durable double-walled insulated tumbler keeps your beverages at the perfect.",
        href: '#',
        price: '$35.00',
        status: 'out-for-delivery',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc: null,
        imageAlt: null,
      },
      // More products...
    ]

export function Boom() {
  return (
      <div className="py-4">
          <div className="grid gap-2 mb-8 md:grid-cols-1 lg:grid-cols-2 ">
              <React.Fragment>
                    {orders.map((product) => (
                      <a href="#" key={product.id} className="flex flex-row-reverse md:flex-row lg:flex shadow-sm rounded bg-white hover:shadow-md">
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
                      </a>
                    ))}
              </React.Fragment>
          </div>
      </div>
  )
}
