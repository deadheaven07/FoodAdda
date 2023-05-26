import React from "react";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lognin from "./Screens/Lognin";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Screens/SignUp";
import { CartProvider } from "./Components/ContextReducer";


function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Lognin />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
