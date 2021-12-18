import { Dispatch, useReducer } from "react";
import { Product, ProductOrder } from "../types";
import { Price } from "./price";

export interface ProductOrderInCart extends ProductOrder {
    id: number
}

export const enum UserActionType {
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART",
    GET_TOTAL_PRICE = "GET_TOTAL_PRICE",
    SET_CURRENT_ORDER_VIEW = "SET_CURRENT_ORDER_VIEW",
    SET_CURRENT_ORDER_VIEW_QUANTITY = "SET_CURRENT_ORDER_VIEW_QUANTITY",
    SET_CURRENT_ORDER_VIEW_OPTION = "SET_CURRENT_ORDER_VIEW_OPTION",
}

export type UserAction =
    | { type: UserActionType.ADD_TO_CART; productOrder: ProductOrder }
    | { type: UserActionType.REMOVE_FROM_CART; id: number }
    | { type: UserActionType.GET_TOTAL_PRICE }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW, productOrder: ProductOrder }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW_QUANTITY, quantity: number }
    | { type: UserActionType.SET_CURRENT_ORDER_VIEW_OPTION, optionId: number, choiceId: number }


export interface State {
    cart: ProductOrderInCart[],
    products: { [key: number]: Product },
    currentProductView: ProductOrder
}

let uniqueId = 0;
const reducer = (state: State, action: UserAction): State => {
    switch (action.type) {
        case UserActionType.ADD_TO_CART:
            const order = { ...action.productOrder, id: uniqueId++}
            const cart = [...state.cart, order];
            const products = { ...state.products, [action.productOrder.productId]: action.productOrder.product }
            return { ...state, cart, products }
        case UserActionType.REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter(c => c.id !== action.id) }
        case UserActionType.SET_CURRENT_ORDER_VIEW:
            const products2 = { ...state.products, [action.productOrder.productId]: action.productOrder.product }
            return { ...state, currentProductView: action.productOrder, products: products2}
        case UserActionType.SET_CURRENT_ORDER_VIEW_QUANTITY:
            const currentProductView = state.currentProductView;
            return { ...state, currentProductView: { ...currentProductView, quantity: action.quantity}}
        case UserActionType.SET_CURRENT_ORDER_VIEW_OPTION:
            const {optionId, choiceId} = action;
            const { productOptions: options } = state.currentProductView;
            return { ...state, currentProductView: {...state.currentProductView,  productOptions: { ...options, [optionId]: choiceId }}}
        default:
            throw new Error();
    }
}

export function getOrderOptions(order: ProductOrder): string[] {
    const choices = Object.keys(order.productOptions).reduce((acc: string[], key: string) => {
        const optionId = parseInt(key)
        const choiceId = order.productOptions[optionId];
        const choiceString = order.product.productOptions.find(o => o.id === optionId)!.options.find(c => c.id === choiceId)!.name;
        acc.push(choiceString);
        return acc
    }, [])

    return choices;
}

export function selectTotalPrice(cart: ProductOrder[]): Price {
    let total = 0;
    for (const order of cart) {
        total += getPriceForSingleOrder(order).raw;
    }
    return new Price(total);
}

export function getTotalQuantity(cart: ProductOrder[]): number {
    let quantity = 0;
    for (const order of cart) {
        quantity += order.quantity;
    }
    return quantity;
}

export function getPriceForSingleOrder(order: ProductOrder): Price {
    let orderTotal = 0;
    if (Object.keys(order.productOptions).length === 0) {
        return new Price(order.product.price * order.quantity)
    }
    for (const optionId of Object.keys(order.productOptions)) {
        const productOption = order.product.productOptions.find(o => o.id === Number.parseInt(optionId));
        const productChoice = productOption!.options.find(c => c.id === order.productOptions[Number.parseInt(optionId)])
        orderTotal += productChoice!.priceIncrement;
    }

    return new Price(orderTotal * order.quantity);
}

export function useCartState( intialState: State): [State, Dispatch<UserAction>]  {
    const [state, dispatch] = useReducer(reducer, intialState);
    return [state, dispatch]
}
