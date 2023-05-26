import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
import { Carousal } from "../Components/Carousal";
import { useCart, CartProvider } from "../Components/ContextReducer";
import pancakeImage from "../images/pancakeImage.jpg";
import cakeImage from "../images/cakeImage.jpeg";
import butterChickenImage from "../images/butterChickenImage.jpg";
import pancake2Image from "../images/pancake2Image.jpg";
import cake2Image from "../images/cake2Image.jpg";
import butterChicken2Image from "../images/butterChicken2Image.jpg";

export default function Home() {
  // State variables
  const [foodCat, setFoodCat] = useState([]);
  const [foodData, setFoodData] = useState([]);

  // Function to load data from the server
  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();

      // Update the state with the fetched data
      setFoodData(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  // Load data when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  // Access cart items
  const { cartItems } = useCart(); // Destructure cartItems from cart

  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Carousal */}
      <div className="m-1">
        <Carousal />
      </div>

      {/* Cart Items */}
      <div
        className="m-3 d-flex flex-wrap justify-content-center"
        style={{
          gap: "20px", // gap between cart items
          textAlign: "center" // Center the items within the container
        }}
      >
        {/* Cart Item 1 */}
        <Cart
          myImage={pancakeImage}
          cakeName="Pancake"
          impText="This is a pancake"
        />

        {/* Cart Item 2 */}
        <Cart
          myImage={butterChickenImage}
          cakeName="Butter Chicken"
          impText="This is a dish"
        />

        {/* Cart Item 3 */}
        <Cart
          myImage={cakeImage}
          cakeName="Cake"
          impText="This is a cake"
        />

        {/* Cart Item 4 */}
        <Cart
          myImage={pancake2Image}
          cakeName="Pancake 2"
          impText="This is another pancake"
        />

        {/* Cart Item 5 */}
        <Cart
          myImage={cake2Image}
          cakeName="Cake 2"
          impText="This is another cake"
        />

        {/* Cart Item 6 */}
        <Cart
          myImage={butterChicken2Image}
          cakeName="Butter Chicken 2"
          impText="This is another dish"
        />
      </div>

      {/* Render cart items */}
      <div>
        <h6>Thank   You    For     Visiting   From   <b><ul><i> Harsh  Raghuwanshi  </i></ul></b>   </h6>
        <ul>
          {cartItems && cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Size: {item.size} - Price: {item.price}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>

      {/* CSS Media Query for Mobile */}
      <style jsx>{`
                @media only screen and (max-width: 600px) {
                    .m-3 {
                        flex-direction: column;
                        align-items: center;
                    }
                }
            `}</style>
    </div>
  );
}
