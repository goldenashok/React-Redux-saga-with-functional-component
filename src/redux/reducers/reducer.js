import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constant"

export const cartData = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...state]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART condition ", action);
            // data.length= data.length? data.length-1:[]
            const remainingItems = state.filter((item) => item.id !== action.data)
            return [...remainingItems]
        case EMPTY_CART:
            console.warn("EMPTY CART condition ", action);
            state = []
            return [...state]
        default:
            return state
    }
}