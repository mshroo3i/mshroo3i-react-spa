import { getPriceForSingleOrder, ProductOrder, selectTotalPrice } from "./cart-reducer";
import { customEncodeUri } from "./custom-url-encode";

interface Inquery {
    cart: ProductOrder[],
    paymentMethod: string,
    shippingMethod: string,
    preferredDeliveryTime: string,
    address: string,
}

export function encodeCart(inquery: Inquery): string {
    let result = '*السلة*\n'
    result += '--------------\n\n'

    for (const order of inquery.cart) {
        const productName = order.product.name
        const options = []
        for (let key of Object.keys(order.options)) {
            const id = parseInt(key)
            const option = order.product.options.find(o => o.id === id)
            const choice = option?.choices.find(c => c.id === order.options[id])
            options.push({ text: option!.description, choice: choice!.text })
        }
        const price = getPriceForSingleOrder(order)

        result += `*${productName}*\n`
        result += options.map(o => o.text).join(' | ')
        if (options.length > 0) {
            result += ` | الكمية: ${order.quantity}\n`
        } else {
            result += `الكمية: ${order.quantity}`
        }
        result += price.toFormattedString() + '\n\n';
    }

    result += '\n*طريقة التوصيل*\n'
    result += '--------------\n'
    result += inquery.shippingMethod + '\n\n'

    if (inquery.shippingMethod === 'توصيل') {
        result += '\n*العنوان*\n'
        result += '--------------\n'
        result += inquery.address + '\n\n'
    }

    result += '\n*طريقة الدفع*\n'
    result += '--------------\n'
    result += inquery.paymentMethod + '\n\n'

    result += '\n*التوقيت*\n'
    result += '--------------\n'
    result += inquery.preferredDeliveryTime + '\n\n'

    result += '\n*الاجمالي قبل رسوم التوصيل*\n'
    result += '--------------\n'
    result += selectTotalPrice(inquery.cart).toFormattedString()


    return customEncodeUri(result)
}