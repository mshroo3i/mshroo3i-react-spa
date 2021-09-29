import { Footer } from './Footer'
import { Banner } from './Banner'
import { Modal } from './modal-order/Modal'
import { Header } from './Header'
import { Hero } from './Hero'
import React, { useState } from 'react'
import { Product, products } from '../data/products'
import { ProductItem } from './ProductItem'
import { getTotalQuantity, ProductOrder, selectTotalPrice, useCartState, UserActionType } from '../lib/cart-reducer'
import { ModalContent } from './modal-order/ModalContent'
import { Customizations } from './modal-order/Customizations'

export default function Example() {
  const [open, setOpen] = useState(false)
  const [state, dispatch] = useCartState({ products, cart: [], currentProductView: {
    product: products[0],
    quantity: 1,
    productId: products[0].id,
    options: products[0].options.reduce((acc, o) => {
      acc = { ...acc, [o.id]: o.choices[0].id }
      return acc
    }, {})}});
  const closeModal = () => {
    setOpen(false);
  }

  const onProductClick = (product: Product) => {
    dispatch({
      type: UserActionType.SET_CURRENT_ORDER_VIEW,
      productOrder: {
        product,
        productId: product.id,
        quantity: 1,
        options: product.options.reduce((acc, o) => {
          acc = { ...acc, [o.id]: o.choices[0].id }
          return acc
        }, {})
      }
    })
    console.log("dispatching " + product.name)
    setOpen(true)
  }

  const onAddToCart = (productOrder: ProductOrder): void => {
    dispatch({ type: UserActionType.ADD_TO_CART, productOrder })
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

      {state.cart.length > 0 && <Banner price={selectTotalPrice(state.cart)} quantity={getTotalQuantity(state.cart)} />}

      <Modal open={open} closeModal={closeModal} imageSrc={state.currentProductView.product.imageSrc} imageAlt={state.currentProductView.product.imageAlt} >
        <ModalContent order={state.currentProductView} onAdd={() => {onAddToCart(state.currentProductView)}}>
          <Customizations
            order={state.currentProductView}
            updateQuantity={(quantity: number) => dispatch({ type:UserActionType.SET_CURRENT_ORDER_VIEW_QUANTITY, quantity})}
            updateOption={(optionId, choiceId) => dispatch({ type: UserActionType.SET_CURRENT_ORDER_VIEW_OPTION, optionId, choiceId})}
          />
        </ModalContent>
      </Modal>

    </div>
  )
}
