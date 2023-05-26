import React from "react";
import ReactDOM from "react-dom";
import CartProvider from "./Components/CartProvider";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById("root")
);
