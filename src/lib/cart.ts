import { Product } from "../data/products";

export interface ProductOrder {
    Product: Product
    productId: number
    quantity: number
    options: Option[]
  }

  export interface Option {
    optionId: number
    choiceId: number
  }


export class Cart {

    constructor(private cart: ProductOrder[]) {

    }

    addProduct(productOrder: ProductOrder) {
        this.cart.push(productOrder);
    }

    get totalPrice(): number {
        return 3;
    }

    get numberOfItems(): number {
        const sum = this.cart.reduce((acc, item) => {
            acc += item.quantity;
            return acc;
        }, 0)
        return sum;
    }
}