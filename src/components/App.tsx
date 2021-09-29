import { Footer } from './Footer'
import { Banner } from './Banner'
import { Modal } from './modal-order/Modal'
import { Header } from './Header'
import { Hero } from './Hero'
import React, { useState } from 'react'
import { Product, products } from '../data/products'
import { ProductItem } from './ProductItem'
import { getTotalQuantity, ProductOrder, selectTotalPrice, useCartState, UserActionType } from '../lib/cart-reducer'
import { ModalProductView } from './modal-order/ModalProductView'
import { Customizations } from './modal-order/Customizations'

const enum ModalView {
  PRODUCT_VIEW = "PRODUCT_VIEW",
  REVIEW_CART = "REVIEW_CART"
}

export default function Example() {
  const [openModal, setOpenModal] = useState<ModalView | undefined>(undefined)
  const [state, dispatch] = useCartState({
    products, cart: [], currentProductView: {
      product: products[0],
      quantity: 1,
      productId: products[0].id,
      options: products[0].options.reduce((acc, o) => {
        acc = { ...acc, [o.id]: o.choices[0].id }
        return acc
      }, {})
    }
  });
  const closeModal = () => {
    setOpenModal(undefined);
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
    setOpenModal(ModalView.PRODUCT_VIEW)
  }

  const onAddToCart = (productOrder: ProductOrder): void => {
    dispatch({ type: UserActionType.ADD_TO_CART, productOrder })
    setOpenModal(undefined);
  }

  const productView = (<ModalProductView order={state.currentProductView} onAdd={() => { onAddToCart(state.currentProductView) }}>
    <Customizations
      order={state.currentProductView}
      updateQuantity={(quantity: number) => dispatch({ type: UserActionType.SET_CURRENT_ORDER_VIEW_QUANTITY, quantity })}
      updateOption={(optionId, choiceId) => dispatch({ type: UserActionType.SET_CURRENT_ORDER_VIEW_OPTION, optionId, choiceId })}
    />
  </ModalProductView>)

  const reviewCart = (<div>wawa wa</div>)

  let modalView = undefined;
  if (openModal === ModalView.PRODUCT_VIEW) {
    modalView = productView;
  } else if (openModal === ModalView.REVIEW_CART) {
    modalView = reviewCart;
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

      {state.cart.length > 0 && <Banner onClickHandler={() => { setOpenModal(ModalView.REVIEW_CART)}} price={selectTotalPrice(state.cart)} quantity={getTotalQuantity(state.cart)} />}

      <Modal open={openModal != null} closeModal={closeModal} imageSrc={openModal === ModalView.PRODUCT_VIEW ? state.currentProductView.product.imageSrc : undefined} imageAlt={state.currentProductView.product.imageAlt} >
        {modalView ?? <div />}
      </Modal>

    </div>
  )
}
