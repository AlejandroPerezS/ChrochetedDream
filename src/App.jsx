import React from 'react';
import siteLogo from './assets/logo.png';
import './styles/App.css';

function App() {
    function cutom_order() {

    }

    function order_item() {

    }

    function req_info() {

    }

    function review() {

    }

    let div = <>
        <div className="page">

            <div className="nav-bar">
                <div className="logo">
                    <img src={siteLogo} alt="Crocheted Dream Logo"/>
                </div>
                <div className="about-us">
                    <p>Hello, we are the Crocheted Dream! team and we would like to show you some of our products.
                        We encourage you to contact us and don’t be afraid nothing is too difficult for us.
                    </p>
                </div>

            </div>


            <div className="content-container">
                <div className="featured-items-grid">
                    <div className="product-card">
                        <img src={siteLogo} alt="Item Name"/>
                        <h5>Item Name</h5>
                        <p className="price">$XX.XX</p>
                    </div>

                </div>

            </div>


            <div className="menu-container">
                <div className="menu">
                    <h2> Fill the form for more information or to place an order</h2>

                    <input type="text" placeholder="First Name"/>
                    <br/>
                    <select className="select" name="Select the most relevant option">
                        <option value="order_custom_item" onSelect={cutom_order}>Make a custom order</option>
                        <option value="order_item" onSelect={order_item}>Make order that is on the site</option>
                        <option value="req_info" onSelect={req_info}>Request more information</option>
                        <option value="review" onSelect={review}>Leave a review</option>
                    </select>
                    <br/>
                    <label htmlFor="order_date">Please choose a date for your Order</label>
                    <br/>
                    <input type="date" id="order_date"/>

                </div>
            </div>
        </div>
    </>;
    return div;
}

export default App;
