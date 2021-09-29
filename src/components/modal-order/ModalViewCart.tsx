/* This example requires Tailwind CSS v2.0+ */
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        price: '$36.00',
        color: 'Charcoal',
        size: 'L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg',
        imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$36.00',
        color: 'Charcoal',
        size: 'L',
        // imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg',
        // imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        price: '$36.00',
        color: 'Charcoal',
        size: 'L',
        // imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg',
        // imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        price: '$36.00',
        color: 'Charcoal',
        size: 'L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg',
        imageAlt: "Model wearing men's charcoal basic tee in large.",
    },
    // More products...
]

export function ModalViewCart() {
    return (
        <div className="text-right px-4 pt-4 sm:p-6">
            <div className="lg:col-start-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                <p className="mt-2 text-sm text-gray-500">
                    Check the status of recent orders, manage returns, and download invoices.
                </p>

                <ul
                    className="max-modal-scrollable-height-60vh overflow-y-auto mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
                >
                    {products.map((product) => (
                        <li key={product.id} className="flex py-6 space-x-6">
                            <p className="flex-none font-medium text-gray-900">{product.price}</p>
                            <div className="flex-auto space-y-1">
                                <h3 className="text-gray-900">
                                    <a href={product.href}>{product.name}</a>
                                </h3>
                                <p>{product.color}</p>
                                <p>{product.size}</p>
                            </div>
                            {product.imageSrc && <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                            />}
                        </li>
                    ))}
                </ul>


                <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base">$86.40</dd>
                </div>

            </div>
        </div>

    )
}
