import React, { useState } from 'react'
import Head from 'next/head'
import { Layout, siteTitle } from "../components/Layout";
import { storeInfo, products } from '../data/ebtesam-cuisine';
import { GetStaticPropsResult } from 'next';
import { Banner } from '../components/zatar-samar/Banner'
import { Modal } from '../components/zatar-samar/modal-order/Modal'
import { ProductItem } from '../components/zatar-samar/ProductItem'
import { ModalProductView } from '../components/zatar-samar/modal-order/ModalProductView'
import { Customizations } from '../components/zatar-samar/modal-order/Customizations'
import { ModalViewCart } from '../components/zatar-samar/modal-order/ModalViewCart'
import { getTotalQuantity, selectTotalPrice, useCartState, UserActionType } from '../lib/cart-reducer'
import { Product, ProductOrder } from '../types';
import { StoreHero } from '../components/store/StoreHero';

const enum ModalView {
  PRODUCT_VIEW = "PRODUCT_VIEW",
  REVIEW_CART = "REVIEW_CART"
}

export default function ZatarSamar() {
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

  const removeFromCart = (id: number) => {
    if (state.cart.length === 1) {
      closeModal();
    }
    dispatch({ type: UserActionType.REMOVE_FROM_CART, id })
  }
  const reviewCart = (<ModalViewCart cart={state.cart} removeFromCart={removeFromCart}></ModalViewCart>)

  let modalView = undefined;
  if (openModal === ModalView.PRODUCT_VIEW) {
    modalView = productView;
  } else if (openModal === ModalView.REVIEW_CART) {
    modalView = reviewCart;
  }

  return (<Layout>
    <Head>
      <title>{`${storeInfo.storeNameEn} - ${siteTitle}`}</title>
    </Head>
    <div className="bg-white">
      {/* <Header /> */}

      <div>
        {/* Hero */}
        <StoreHero storeInfo={storeInfo} /> 

        {/* Products */}
        <section aria-labelledby="trending-heading" className="">
          <div className="text-right pt-8  sm:py-9 lg:max-w-7xl lg:mx-auto lg:px-8">
            <div className="pb-4 px-4 flex items-center justify-start sm:px-6 lg:px-0">
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
      </div>
      {/* price={selectTotalPrice(state.cart)} quantity={getTotalQuantity(state.cart)} */}
      {state.cart.length > 0
        && <Banner onClickHandler={() => { setOpenModal(ModalView.REVIEW_CART) }}>
          <div className="absolute inset-y-0 left-0 pt-2 ml-2">
            <span className="text-white" aria-hidden="true">{selectTotalPrice(state.cart).toFormattedString()}</span>
          </div>
          <p className="font-medium text-center text-white truncate">
            راجع السلة
          </p>
          <div className=" border-white border-2 absolute inset-y-0 right-0 my-2 mr-2 rounded-full px-2">
            <span className="text-white" aria-hidden="true">{getTotalQuantity(state.cart).toLocaleString("ar-EG")}</span>
          </div>
        </Banner>
      }

      <Modal open={openModal != null} closeModal={closeModal} imageSrc={openModal === ModalView.PRODUCT_VIEW ? state.currentProductView.product.imageSrc : undefined} imageAlt={state.currentProductView.product.imageAlt} >
        {modalView ?? <div />}
      </Modal>

    </div>
  </Layout>)
}

export function getStaticProps(): GetStaticPropsResult<{ products: Product[] }> {
  return {
    props: {
      products,
    },
  }
}