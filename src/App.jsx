import React from 'react';
import siteLogo from './assets/logo.png';
import './styles/App.css';

function App() {
    return (
        <div className="page">

            <div className="nav-bar">
                <div className="logo">
                    <img src={siteLogo} alt="Crocheted Dream Logo" />
                </div>
                <div className="about-us">
                    <p>Hello, we are the Crocheted Dream! team and we would like to show you some of our products.
                        We encourage you to contact us and don’t be afraid nothing is too difficult for us.
                    </p>
                </div>
                <div className="logout">
                    <a href="#">Log out</a>
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
                    <a className="log-in">Please log in</a>
                    <a className="cart">Your Cart</a>
                    <ul className="menu-links">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                        <li><a href="#">Link 5</a></li>
                    </ul>
                    <label>
                        <input type="text" placeholder="Search.." className="search" />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default App;
