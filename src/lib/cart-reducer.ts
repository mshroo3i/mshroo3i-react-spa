import { Dispatch, ReducerAction, ReducerState, useReducer } from "react";
import { Product } from "../data/products";
import { Price } from "./price";

export interface ProductOrder {
    // Product: Product
    productId: number
    quantity: number
    options: OrderOption[]
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
    | { type: UserActionType.ADD_TO_CART; productOrder: ProductOrder, product: Product }
    | { type: UserActionType.REMOVE_FROM_CART; productId: number }
    | { type: UserActionType.GET_TOTAL_PRICE }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW, productOrder: ProductOrder, product: Product }


export interface State {
    cart: ProductOrder[],
    products: { [key: number]: Product },
    currentProductView: ProductOrder
}

const initialState: State = { cart: [], products: {}, currentProductView: { productId: NaN, quantity: NaN, options: [] } };

const reducer = (state: State, action: UserAction): State => {
    switch (action.type) {
        case UserActionType.ADD_TO_CART:
            const cart = [...state.cart, action.productOrder];
            const products = { ...state.products, [action.product.id]: action.product }
            return { ...state, cart, products }
        case UserActionType.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(c => c.productId !== action.productId) }
        case UserActionType.SET_CURRENT_ORDER_VIEW:
            const products2 = { ...state.products, [action.product.id]: action.product }
            return { ...state, currentProductView: action.productOrder, products: products2}
        default:
            throw new Error();
    }
}

export function selectTotalPrice(state: State): Price {
    let total = 0;
    for (const order of state.cart) {
        const product = state.products[order.productId];
        total += getPriceForSingleOrder(order, product).raw;
    }
    return new Price(total);
}

export function getPriceForSingleOrder(order: ProductOrder, product: Product): Price {
    let orderTotal = 0;
    debugger
    for (const option of order.options) {
        const productOption = product.options.find(o => o.id === option.optionId);
        if (productOption == null) {
            continue;
        }
        const productChoice = productOption.choices.find(c => c.id === option.choiceId)
        if (productChoice == null) {
            continue;
        }
        orderTotal += productChoice.price.raw;
    }

    return new Price(orderTotal * order.quantity);
}

export function useCartState(): [State, Dispatch<UserAction>]  {
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch]
}
