import { Product } from "../../data/products"
import { Price } from "../../lib/price"
import { TrashIcon } from "@heroicons/react/outline"
import { Banner } from "../Banner"
import { WhatsAppIcon } from "../../assets/WhatsappIcon"
import { getOrderOptions, getPriceForSingleOrder, ProductOrder, ProductOrderInCart, selectTotalPrice, UserAction } from "../../lib/cart-reducer"
import { Dispatch } from "react"

export function ModalViewCart({cart, removeFromCart}: {cart: ProductOrderInCart[], removeFromCart: any}) {
    const totalPrice = selectTotalPrice(cart);
    // const productOrders = cart.

    return (
        <div className="text-right px-4 pt-4 sm:p-6">
            <div className="lg:col-start-2">
                <h1 className=" border-b pb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">السلة</h1>
                <div className="max-modal-scrollable-height-88vh overflow-y-auto">
                    <ul
                        className="text-sm font-medium text-gray-500 border-gray-200 divide-y divide-gray-200"
                    >
                        {cart.map((order) => (
                            <li key={order.id} className="flex py-6 space-x-2">
                                {order.product.imageSrc && <img
                                    src={order.product.imageSrc}
                                    alt={order.product.imageAlt}
                                    className="flex-none w-20 h-20 bg-gray-100 rounded-md object-center object-cover"
                                />}
                                <p className="flex-none font-medium text-gray-900">{getPriceForSingleOrder(order).toFormattedString()}</p>
                                <div className="flex-auto space-y-1">
                                    <h3 className="text-gray-900">
                                        {order.product.name}
                                    </h3>
                                    <p>{getOrderOptions(order).join(' | ')}</p>
                                    {/* <p>{product.size}</p> */}
                                    {/* <div className="ml-4"> */}
                                    <button onClick={() => removeFromCart(order.id)} type="button" className="h-5 w-5 text-sm font-medium text-green-600 hover:text-green-500">
                                        <TrashIcon className="text-green-600 hover:text-green-500" />
                                    </button>
                                    {/* </div> */}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            العنوان
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className="text-right shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder=""
                                aria-describedby="address-description"
                            />
                        </div>
                    </div>

                    <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
                        <div className="flex flex-row-reverse justify-between">
                            <dt>رسوم التوصيل</dt>
                            <dd className="text-gray-900">حسب المنطقة</dd>
                        </div>

                        <div className="flex flex-row-reverse items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                            <dt className="text-base">الاجمالي قبل التوصيل</dt>
                            <dd className="text-base">{totalPrice.toFormattedString()}</dd>
                        </div>
                    </dl>
                    <div className="mb-16" />

                </div>
                <Banner onClickHandler={() => { }}>
                    <div
                        className=" flex  justify-center"
                    >
                        <WhatsAppIcon className="mr-2 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                        أرسل الطلب عبر الواتساب
                    </div>
                </Banner>
            </div>
        </div>

    )
}
