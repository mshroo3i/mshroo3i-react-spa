import { Dispatch, useReducer } from "react";
import { Product } from "../data/products";
import { Price } from "./price";

export interface ProductOrder {
    productId: number
    quantity: number
    // options2: OrderOption[],
    product: Product,
    options: { [choiceId: number]: number}
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
    SET_CURRENT_ORDER_VIEW_QUANTITY = "SET_CURRENT_ORDER_VIEW_QUANTITY",
    SET_CURRENT_ORDER_VIEW_OPTION = "SET_CURRENT_ORDER_VIEW_OPTION",
}

type UserAction =
    | { type: UserActionType.ADD_TO_CART; productOrder: ProductOrder }
    | { type: UserActionType.REMOVE_FROM_CART; productId: number }
    | { type: UserActionType.GET_TOTAL_PRICE }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW, productOrder: ProductOrder }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW_QUANTITY, quantity: number }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW_OPTION, optionId: number, choiceId: number }


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
        case UserActionType.SET_CURRENT_ORDER_VIEW_QUANTITY:
            const currentProductView = state.currentProductView;
            return { ...state, currentProductView: { ...currentProductView, quantity: action.quantity}}
        case UserActionType.SET_CURRENT_ORDER_VIEW_OPTION:
            const {optionId, choiceId} = action;
            const { options } = state.currentProductView;
            return { ...state, currentProductView: {...state.currentProductView,  options: { ...options, [optionId]: choiceId }}}
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
    if (Object.keys(order.options).length === 0) {
        return new Price(order.product.price.raw * order.quantity)
    }
    for (const optionId of Object.keys(order.options)) {
        const productOption = order.product.options.find(o => o.id === Number.parseInt(optionId));
        const productChoice = productOption!.choices.find(c => c.id === order.options[Number.parseInt(optionId)])
        orderTotal += productChoice!.price.raw;
    }

    return new Price(orderTotal * order.quantity);
}

export function useCartState( intialState: State): [State, Dispatch<UserAction>]  {
    const [state, dispatch] = useReducer(reducer, intialState);
    return [state, dispatch]
}
