import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from './ContextReducer';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from React Bootstrap

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems = [] } = useCart();
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const [toggleButtonColor, setToggleButtonColor] = useState('bg-light'); // Added state for toggle button color
    const [showCartModal, setShowCartModal] = useState(false); // State for cart modal

    const handleLogout = () => {
        // Function to handle logout
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const toggleMobileNavbar = () => {
        // Function to toggle mobile navbar
        setShowMobileNavbar(!showMobileNavbar);
        setToggleButtonColor(showMobileNavbar ? 'bg-light' : 'bg-red'); // Toggle button color change
    };

    const closeMobileNavbar = () => {
        // Function to close mobile navbar
        setShowMobileNavbar(false);
        setToggleButtonColor('bg-light');
    };

    const openCartModal = () => {
        // Function to open cart modal
        setShowCartModal(true);
    };

    const closeCartModal = () => {
        // Function to close cart modal
        setShowCartModal(false);
    };

    return (
        <div>
            {/* Navigation bar for web */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    {/* Brand logo */}
                    <Link className="navbar-brand fs-1 fst-italic" to="/">
                        <span className="brand-text">f00c! A|)|)A</span>
                    </Link>
                    <button
                        className={`navbar-toggler ${toggleButtonColor}`} // Apply color class to toggle button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={showMobileNavbar ? 'true' : 'false'}
                        aria-label="Toggle navigation"
                        onClick={toggleMobileNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse ${showMobileNavbar ? 'show' : ''}`}
                        id="navbarNav"
                        style={{ transition: 'max-height 0.5s ease-in-out' }}
                    >
                        <ul className="navbar-nav me-auto mb-2">
                            {/* Home link */}
                            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                <Link className="btn bg-red text-bg-white mx-3 fs-6" to="/" onClick={closeMobileNavbar}>
                                    Home
                                </Link>
                            </li>
                            {localStorage.getItem('authToken') && (
                                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                                    <Link
                                        className="btn bg-red text-bg-white mx-3 fs-6"
                                        to="/"
                                        onClick={closeMobileNavbar}
                                    >
                                        My Orders
                                    </Link>
                                </li>
                            )}
                        </ul>
                        {!localStorage.getItem('authToken') ? (
                            <div className="d-flex">
                                {/* Login link */}
                                <Link className="btn bg-red text-bg-white mx-2" to="/login" onClick={closeMobileNavbar}>
                                    Login
                                </Link>
                                {/* Sign Up link */}
                                <Link className="btn bg-red text-bg-white mx-2" to="/signup" onClick={closeMobileNavbar}>
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <div>
                                {/* My Cart button */}
                                <Button className="btn bg-red text-bg-white mx-2" onClick={openCartModal}>
                                    My Cart ({cartItems ? cartItems.length : 0})
                                </Button>
                                {/* Logout button */}
                                <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
                                    Log Out
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Cart Modal */}
            <Modal show={showCartModal} onHide={closeCartModal}>
                <Modal.Header closeButton>
                    <Modal.Title>My Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Render cart items */}
                    <ul>
                        {cartItems &&
                            cartItems.map((item) => (
                                <li key={item.id}>
                                    {item.name} - Quantity: {item.quantity} - Size: {item.size} - Price: {item.price}
                                </li>
                            ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeCartModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
