import { Dispatch, ReducerAction, ReducerState, useReducer } from "react";
import { Product } from "../data/products";
import { Price } from "./price";

export interface ProductOrder {
    // Product: Product
    productId: number
    quantity: number
    options: OrderOption[],
    product: Product
}

export interface OrderOption {
    optionId: number
    choiceId: number
}

export const enum UserActionType {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE",
    SET_CURRENT_ORDER_VIEW = "SET_CURRENT_ORDER_VIEW",
}

type UserAction =
    | { type: UserActionType.ADD_TO_CART; productOrder: ProductOrder }
    | { type: UserActionType.REMOVE_FROM_CART; productId: number }
    | { type: UserActionType.GET_TOTAL_PRICE }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW, productOrder: ProductOrder }


export interface State {
    cart: ProductOrder[],
    products: { [key: number]: Product },
    currentProductView: ProductOrder
}

const reducer = (state: State, action: UserAction): State => {
    switch (action.type) {
        case UserActionType.ADD_TO_CART:
            const cart = [...state.cart, action.productOrder];
            const products = { ...state.products, [action.productOrder.productId]: action.productOrder.product }
            return { ...state, cart, products }
        case UserActionType.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(c => c.productId !== action.productId) }
        case UserActionType.SET_CURRENT_ORDER_VIEW:
            const products2 = { ...state.products, [action.productOrder.productId]: action.productOrder.product }
            return { ...state, currentProductView: action.productOrder, products: products2}
        default:
            throw new Error();
    }
}

export function selectTotalPrice(state: State): Price {
    let total = 0;
    for (const order of state.cart) {
        total += getPriceForSingleOrder(order).raw;
    }
    return new Price(total);
}

export function getPriceForSingleOrder(order: ProductOrder): Price {
    let orderTotal = 0;
    if (order.options.length === 0) {
        return order.product.price
    }
    for (const option of order.options) {
        const productOption = order.product.options.find(o => o.id === option.optionId);
        const productChoice = productOption!.choices.find(c => c.id === option.choiceId)
        orderTotal += productChoice!.price.raw;
    }

    return new Price(orderTotal * order.quantity);
}

export function useCartState( intialState: State): [State, Dispatch<UserAction>]  {
    const [state, dispatch] = useReducer(reducer, intialState);
    return [state, dispatch]
}
