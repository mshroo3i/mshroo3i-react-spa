import { Footer } from './Footer'
import { Banner } from './Banner'
import { Modal } from './modal-order/Modal'
import { Header } from './Header'
import { Hero } from './Hero'
import React, { useState } from 'react'
import { Product, products } from '../data/products'
import { ProductItem } from './ProductItem'
import { OrderOption, useCartState, UserActionType } from '../lib/cart-reducer'

export default function Example() {
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useCartState();
  const closeModal = () => {
    setOpen(false);
  }

  const onProductClick = (product: Product) => {
    dispatch({
      type: UserActionType.SET_CURRENT_ORDER_VIEW,
      product,
      productOrder: {
        productId: product.id,
        quantity: 1,
        options: product.options.map(o => ({ optionId: o.id, choiceId: o.choices[0].id }))
      }
    })
    setOpen(true)
  }

  const onAddToCart = (productId: number, options: OrderOption[], quantity: number, product: Product): void => {
    dispatch({ type: UserActionType.ADD_TO_CART, productOrder: { productId, options, quantity }, product })
    setOpen(false);
  }

  return (
    <div className="bg-white">
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* Products */}
        <section aria-labelledby="trending-heading" className="">
          <div className="text-right pt-8  sm:py-9 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="pb-4 px-4 flex items-center justify-end sm:px-6 lg:px-0">
              <h2 id="trending-heading" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                منتجاتنا
              </h2>
            </div>

            <div className="pt-4">
              <div className="grid gap-2 mb-8 md:grid-cols-1 lg:grid-cols-2 ltr md:rtl">
                <React.Fragment>
                  {products.map((product) => (
                    <ProductItem product={product} key={product.id} onClick={() => onProductClick(product)} />
                  ))}
                </React.Fragment>
              </div>
            </div>

            <div className="mt-8 relative">
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {state.cart.length > 0 && <Banner />}

      {<Modal open={open} currentProduct={state.currentProductView} closeModal={closeModal} state={state} />}

    </div>
  )
}
