// Importing necessary modules and components
import { CartProvider } from "./ContextReducer";
import React, { useState } from "react";

// Defining the Carousal component
export const Carousal = () => {
    // State for search query and search results
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Perform search based on the search query
    const performSearch = () => {
        const results = carouselItems.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(results);
        setShowModal(true);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        performSearch();
    };

    // Close the modal popup
    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Handle input change in the search bar
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <CartProvider>
            {/* Carousal */}
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
                style={{ objectFit: "contain !important" }}
            >
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                    {/* Indicator buttons */}
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    {/* ... */}
                </div>

                {/* Carousel Inner */}
                <div className="carousel-inner" id="carousel">
                    {/* Carousel Caption */}
                    <div className="carousal-caption" style={{ zIndex: "10" }}>
                        <div style={{ position: "relative" }}>
                            {/* Search Form */}
                            <form
                                className="d-flex"
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    zIndex: "11",
                                    width: "100%",
                                }}
                                onSubmit={handleSubmit}
                            >
                                {/* Search Bar */}
                                <input
                                    className={`form-control me-2 ${searchResults.length > 0 ? "text-success" : "text-danger"
                                        }`}
                                    style={{ backgroundColor: "transparent" }}
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={searchQuery}
                                    onChange={handleChange}
                                />
                                {/* Search Button */}
                                <button className="btn btn-outline-success text-white" type="submit">
                                    Search
                                </button>
                            </form>

                            {/* Modal Popup */}
                            <ModalPopup
                                showModal={showModal}
                                handleCloseModal={handleCloseModal}
                                searchResults={searchResults}
                            />

                            {/* Carousel Items */}
                            {/* ... */}
                        </div>
                    </div>
                </div>

                {/* Carousel Control Buttons */}
                {/* ... */}
            </div>
        </CartProvider>
    );
};

// ModalPopup component
const ModalPopup = ({ showModal, handleCloseModal, searchResults }) => {
    return (
        <div
            className={`modal fade ${showModal ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{ display: showModal ? "block" : "none" }}
        >
            {/* ... */}
        </div>
    );
};

// Array of carousel items
const carouselItems = ["ButterChicken", "Cake", "Pancake"];
