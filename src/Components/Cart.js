import React, { useState, useEffect } from "react";
import { useCartDispatch } from "./ContextReducer";
import pancakeImage from "../images/pancakeImage.jpg";
import cakeImage from "../images/cakeImage.jpeg";
import butterChickenImage from "../images/butterChickenImage.jpg";
import pancake2Image from "../images/pancake2Image.jpg";
import cake2Image from "../images/cake2Image.jpg";
import butterChicken2Image from "../images/butterChicken2Image.jpg";
import { useCart } from "./ContextReducer";

export default function Cart(props) {
  const dispatch = useCartDispatch(); // Get the dispatch function from the cart context
  const [quantity, setQuantity] = useState(1); // State for the quantity of items
  const [size, setSize] = useState("half"); // State for the size of items
  const [totalPrice, setTotalPrice] = useState(props.basePrice); // State for the total price
  const [cartValue, setCartValue] = useState(""); // State for the cart value
  const [selectedItem, setSelectedItem] = useState(null); // State for the selected item
  const [showModal, setShowModal] = useState(false); // State for controlling the modal visibility
  const cart = useCart(); // Get the cart data from the cart context

  useEffect(() => {
    updatePrice(); // Update the total price when quantity or size changes
  }, [quantity, size]);

  // Update the total price based on quantity and size
  const updatePrice = () => {
    let price = props.basePrice;

    if (size === "full") {
      price += 300;
    } else if (size === "quarter") {
      price -= 50;
    }

    price *= quantity;

    setTotalPrice(price);
  };

  const handleAddToCart = () => {
    const item = {
      id: props.id,
      name: props.cakeName,
      quantity,
      size,
      price: totalPrice,
    };
    setSelectedItem(item); // Set the selected item for displaying in the modal
    setShowModal(true); // Show the modal
    dispatch({ type: "ADD_TO_CART", payload: item }); // Dispatch the action to add the item to the cart
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  // Get the image source based on the cake name
  const getImageSrc = () => {
    if (props.cakeName === "Pancake") {
      return pancakeImage; // Add img for Pancake container
    } else if (props.cakeName === "Cake") {
      return cakeImage; // Add img for Cake container
    } else if (props.cakeName === "Butter Chicken") {
      return butterChickenImage; // Add img for Butter Chicken container
    } else if (props.cakeName === "Pancake 2") {
      return pancake2Image; // Add img for Pancake 2 container
    } else if (props.cakeName === "Cake 2") {
      return cake2Image; // Add img for Cake 2 container
    } else if (props.cakeName === "Butter Chicken 2") {
      return butterChicken2Image; // Add img for Butter Chicken 2 container
    }
    return null;
  };

  // Update the cart value and reflect the price
  useEffect(() => {
    setCartValue(totalPrice !== "000" ? `${totalPrice} Rupees` : "000");
  }, [totalPrice]);

  return (
    <div className="container" style={{ maxWidth: "300px" }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-3">
            <div className="card-body">
              <h3>{props.cakeName}</h3>
              {/* Add img for the container */}
              <img src={getImageSrc()} alt={props.cakeName} className="img-fluid mb-3" />
              <p>Total Price: {props.basePrice} 000</p>
              <hr /> {/* Separate line */}
              {/* Quantity */}
              <div>
                <label>
                  Quantity:
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <div className="btn btn-light">{quantity}</div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </label>
              </div>

              {/* Size */}
              <div>
                <label>
                  Size:
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="form-control"
                  >
                    <option value="half">Half</option>
                    <option value="full">Full</option>
                    <option value="quarter">Quarter</option>
                  </select>
                </label>
              </div>

              {/* Price */}
              <div>
                <label>Price:</label>
                <div className="price-box">
                  {selectedItem ? (
                    <div>
                      {selectedItem.name} - {selectedItem.quantity} {selectedItem.size} -{" "}
                      <span className={totalPrice !== "00" && totalPrice !== selectedItem.price ? "text-success" : ""}>
                        {totalPrice !== "00" ? `${totalPrice} Rupees` : "00"}
                      </span>
                    </div>
                  ) : (
                    cartValue
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div>
                <br /> {/* Separate line */}
                <button onClick={handleAddToCart} className="btn btn-success">
                  Add to Cart
                </button>
              </div>
              <br /> {/* Separate line */}
              <button className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Selected Item</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{selectedItem.name}</p>
                <p>Quantity: {selectedItem.quantity}</p>
                <p>Size: {selectedItem.size}</p>
                <p>Price: {selectedItem.price} Rupees</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
