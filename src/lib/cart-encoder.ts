import { ProductOrder } from "./cart-reducer";

interface Inquery {
    cart: ProductOrder[],
    paymentMethod: string,
    preferredDeliveryTime: string,
    address: string,
}

// export function encodeCart(inquery: Inquery): string {

// }