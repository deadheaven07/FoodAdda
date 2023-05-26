import React, { createContext, useState } from "react";
import pancakeImage from "../images/pancakeImage.jpg";
import cakeImage from "../images/cakeImage.jpeg";
import butterChickenImage from "../images/butterChickenImage.jpg";
import pancake2Image from "../images/pancake2Image.jpg";
import cake2Image from "../images/cake2Image.jpg";
import butterChicken2Image from "../images/butterChicken2Image.jpg";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Pancake",
            price: 5,
            image: pancakeImage,
        },
        {
            id: 2,
            name: "Butter Chicken",
            price: 10,
            image: butterChickenImage,
        },
        {
            id: 3,
            name: "Cake",
            price: 8,
            image: cakeImage,
        },
        {
            id: 4,
            name: "Pancake 2",
            price: 6,
            image: pancake2Image,
        },
        {
            id: 5,
            name: "Cake 2",
            price: 7,
            image: cake2Image,
        },
        {
            id: 6,
            name: "Butter Chicken 2",
            price: 12,
            image: butterChicken2Image,
        },
    ]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
