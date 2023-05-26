import React from "react";
import { useCart } from "./ContextReducer";

const CartModal = ({ closeModal }) => {
    // Get the cart items from the context
    const { cartItems } = useCart();

    return (
        <div className="modal" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">My Cart</h5>
                        <button type="button" className="close" onClick={closeModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* Check if the cart is not empty */}
                        {cartItems.length > 0 ? (
                            <ul>
                                {/* Render each cart item */}
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        {item.name} - Quantity: {item.quantity} - Size: {item.size} - Price: {item.price}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
