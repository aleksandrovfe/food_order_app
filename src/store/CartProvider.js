import {CartContext} from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedAmount = state.totalAmount + action.payload.amount * action.payload.price
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
        const existingItem = {...state.items[existingItemIndex]}
        let updateItems

        if (existingItemIndex !== -1) {
            const updateItem = {
                ...existingItem,
                amount: existingItem.amount + action.payload.amount
            }
            updateItems = [...state.items]
            updateItems[existingItemIndex] = updateItem
        } else {
            updateItems = [...state.items, action.payload]
        }

        return {
            items: [...updateItems],
            totalAmount: updatedAmount
        }
    }

    if (action.type === "REMOVE") {

        const existingItemIndex = state.items.findIndex(item => item.id === action.payload)
        const existingItem = {...state.items[existingItemIndex]}
        const updatedAmount = state.totalAmount - existingItem.price

        console.log(existingItemIndex)
        let updatedItems
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.payload)
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }

    }

    return defaultCartState
}

export const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: "ADD", payload: item})
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: "REMOVE", payload: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}