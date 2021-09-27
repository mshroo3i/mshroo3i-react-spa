import { Dispatch, ReducerAction, ReducerState, useReducer } from "react";
import { Product } from "../data/products";

export interface ProductOrder {
    // Product: Product
    productId: number
    quantity: number
    options: Option[]
}

export interface Option {
    optionId: number
    choiceId: number
}

const enum UserActionType {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE",
}

type UserAction =
    | { type: UserActionType.ADD_TO_CART; productOrder: ProductOrder, product: Product }
    | { type: UserActionType.REMOVE_FROM_CART; productId: number }
    | { type: UserActionType.GET_TOTAL_PRICE }

interface State {
    cart: ProductOrder[],
    products: { [key: number]: Product }
}

const initialState: State = { cart: [], products: {} };

const reducer = (state: State, action: UserAction): State => {
    switch (action.type) {
        case UserActionType.ADD_TO_CART:
            const cart = [...state.cart, action.productOrder];
            const products = { ...state.products, [action.product.id]: action.product }
            return { cart, products }
        case UserActionType.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(c => c.productId !== action.productId) }
        default:
            throw new Error();
    }
}

export function selectTotalPrice(state: State): number {
    let total = 0;
    for (const order of state.cart) {
        const product = state.products[order.productId];
        const { quantity } = order
        let orderTotal = 0;
        for (const option of order.options) {
            const productOption = product.options.find(o => o.id === option.optionId);
            if (productOption == null) {
                throw new Error("productOption not found")
            }
            const productChoice = productOption.choices.find(c => c.id === option.choiceId)
            if (productChoice == null) {
                throw new Error("productChoice not found")
            }
            orderTotal += productChoice.price.raw;
        }

        total += orderTotal * quantity;
    }
    return total;
}

export function useCartState(): [State, Dispatch<UserAction>]  {
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch]
}
