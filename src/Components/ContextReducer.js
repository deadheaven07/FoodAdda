import React, { createContext, useContext, useReducer } from "react";

// Create a context for the cart state and dispatch
const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload];
        case "REMOVE_FROM_CART":
            return state.filter((item) => item.id !== action.payload);
        case "CLEAR_CART":
            return [];
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const useCartDispatch = () => {
    const { dispatch } = useContext(CartContext);
    return dispatch;
};

const useCart = () => {
    const { cart } = useContext(CartContext);
    return cart;
};

// CartProvider component to wrap the app and provide cart state and dispatch
const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, useCartDispatch, useCart, CartProvider };
