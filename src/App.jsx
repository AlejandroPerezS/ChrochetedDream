import React, { useState } from 'react';
import siteLogo from './assets/logo.png';
import {validateEmail} from './functions/emails.jsx'
import './styles/App.css';

function App() {
    // State to capture the selected menu option and the order date
    const [selectedOption, setSelectedOption] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [email,setEmail] = useState("");
    const [error, setError] = useState("");

    // Handler for select changes
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };
    // set the error messages as flash messages
    // handle email input
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (validateEmail()) {
            setError('');

        } else {
            setError('Email is not valid!');

        }
    };




    // Conditionally render form fields based on the selected option
    const renderFormFields = () => {
        switch (selectedOption) {
            case "order_custom_item": {
                // Compute the minimum date: today's date plus 7 days.
                const today = new Date();
                today.setDate(today.getDate() + 7);
                // Convert the date to a string in YYYY-MM-DD format.
                const minDate = today.toISOString().split("T")[0];

                return (
                    <>
                        <label className="date_order" htmlFor="order_date">
                            Please choose a date for your Order
                        </label>
                        <br />
                        <input
                            className="date_order"
                            type="date"
                            id="order_date"
                            value={orderDate}
                            onChange={(e) => setOrderDate(e.target.value)}
                            min={minDate}
                        />
                        <br/>
                        <input type="submit" value="Submit" />
                        </>

                );
            }

            case "order_item":
                // Compute the minimum date: today's date plus 7 days.
                const today = new Date();
                today.setDate(today.getDate() + 7);
                // Convert the date to a string in YYYY-MM-DD format.
                const minDate = today.toISOString().split("T")[0];

                return (
                    <>
                        <label className="date_order" htmlFor="order_date">
                            Please choose a date for your Order
                        </label>
                        <br />
                        <input
                            className="date_order"
                            type="date"
                            id="order_date"
                            value={orderDate}
                            onChange={(e) => setOrderDate(e.target.value)}
                            min={minDate}
                        />
                        <br/>
                        <input type="submit" value="Submit" />
                    </>
                );
            case "req_info":
                return (
                    <>
                        <input
                            type="email"
                            placeholder="samplemail@gmail.com"
                            value={email}
                            onChange={handleEmailChange}
                            />
                        <br/>
                        <input type="submit" value="Submit" />

                    </>
                );
            case "review":
                return (
                    <>



                        <br/>
                        <input type="submit" value="Submit" />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="page">
            {/* Navigation Section */}
            <div className="nav-bar">
                <div className="logo">
                    <img src={siteLogo} alt="Crocheted Dream Logo" />
                </div>
                <div className="about-us">
                    <p>
                        Hello, we are the Crocheted Dream! team and we would like to show you some of our products.
                        We encourage you to contact us and don’t be afraid — nothing is too difficult for us.
                    </p>

                </div>
                {/* Added tagline for extra content */}
                <div className="tagline">
                    Crafting Dreams with Every Stitch
                </div>

            </div>

            {/* Main Content Section */}
            <div className="content-container">
                <div className="featured-items-grid">
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>
                    {/* Add more product cards as needed */}
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name" />
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>

                </div>
            </div>

            {/* Form / Menu Section */}
            <div className="menu-container">
                <div className="menu">
                    <h2>Fill the form for more information or to place an order</h2>
                    <input type="text" placeholder="First Name" />
                    <br />
                    <select className="select" onChange={handleSelectChange}>
                        <option value="">-- Please choose an option --</option>
                        <option value="order_custom_item">Make an order</option>
                        <option value="order_item">Select order from the site</option>
                        <option value="req_info">Request more information</option>
                        <option value="review">Leave a review</option>
                    </select>
                    <br />
                    <div className="c_order">
                        {renderFormFields()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
