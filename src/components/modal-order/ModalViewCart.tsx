import { TrashIcon } from "@heroicons/react/outline"
import { Banner } from "../Banner"
import { WhatsAppIcon } from "../../assets/WhatsappIcon"
import { getOrderOptions, getPriceForSingleOrder, ProductOrderInCart, selectTotalPrice } from "../../lib/cart-reducer"
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { encodeCart } from "../../lib/cart-encoder";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const shippingMethod = [
    'استلام',
    'توصيل',
]
const paymentMethod = [
    'كاش',
    'اونلاين',
]

export function ModalViewCart({ cart, removeFromCart }: { cart: ProductOrderInCart[], removeFromCart: any }) {
    const totalPrice = selectTotalPrice(cart);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(shippingMethod[0])
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethod[0])
    const [preferredDeliveryTime, setPreferredDeliveryTime] = useState('')
    const [address, setAddress] = useState('')
    const inqueryEncoded = encodeCart({
        cart,
        shippingMethod: selectedShippingMethod,
        paymentMethod: selectedPaymentMethod,
        preferredDeliveryTime,
        address,
    });

    return (
        <div className="text-right px-4 pt-4 sm:p-6">
            <div className="lg:col-start-2">
                <h1 className=" border-b pb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">السلة</h1>
                <div className="scrollbar-hide max-modal-scrollable-height-88vh overflow-y-auto">
                    <div className="my-4 flex flex-col space-y-3">
                        <RadioGroup value={selectedPaymentMethod} onChange={setSelectedPaymentMethod}>
                            <RadioGroup.Label className="my-2 block text-sm font-medium text-gray-700">طريقة الدفع</RadioGroup.Label>
                            <div className="flex flex-row-reverse space-x-2 space-x-reverse">
                                {paymentMethod.map((option) => (
                                    <RadioGroup.Option
                                        key={option}
                                        value={option}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'ring-1 ring-offset-2 ring-green-500' : '',
                                                'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 cursor-pointer hover:border-gray-400  focus:outline-none'
                                            )
                                        }
                                    >
                                        {({ checked }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label as="p" className="font-medium text-gray-900">
                                                            {option}
                                                        </RadioGroup.Label>
                                                    </div>
                                                </div>
                                                <div
                                                    className={classNames(
                                                        checked ? 'border-green-500' : 'border-transparent',
                                                        'absolute -inset-px rounded-lg border-2 pointer-events-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>

                        <div className="">
                            <label htmlFor="shippingTime" className="block text-sm font-medium text-gray-700">
                            اي وقت يناسبكم التوصيل
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="shippingTime"
                                    id="shippingTime"
                                    className="text-right shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder=""
                                    value={preferredDeliveryTime}
                                    onChange={e => setPreferredDeliveryTime(e.target.value)}
                                    aria-describedby="shippingTime-description"
                                />
                            </div>
                        </div>
                        <RadioGroup value={selectedShippingMethod} onChange={setSelectedShippingMethod}>
                            <RadioGroup.Label className="mb-2 block text-sm font-medium text-gray-700">طريقة التوصيل</RadioGroup.Label>
                            <div className="flex flex-row-reverse space-x-2 space-x-reverse">
                                {shippingMethod.map((option) => (
                                    <RadioGroup.Option
                                        key={option}
                                        value={option}
                                        className={({ active }) =>
                                            classNames(
                                                active ? 'ring-1 ring-offset-2 ring-green-500' : '',
                                                'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 cursor-pointer hover:border-gray-400  focus:outline-none'
                                            )
                                        }
                                    >
                                        {({ checked }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <div className="text-sm">
                                                        <RadioGroup.Label as="p" className="font-medium text-gray-900">
                                                            {option}
                                                        </RadioGroup.Label>
                                                    </div>
                                                </div>
                                                <div
                                                    className={classNames(
                                                        checked ? 'border-green-500' : 'border-transparent',
                                                        'absolute -inset-px rounded-lg border-2 pointer-events-none'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>

                        {selectedShippingMethod === "توصيل" && <div className="">
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
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    aria-describedby="address-description"
                                />
                            </div>
                        </div>}

                    </div>
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
                <Banner as='a' href={`https://wa.me/15419086876?text=${inqueryEncoded}`}>
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
