import React from "react";
import "./Header2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser, faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";


function Header2() {
    return (
        <div className="header2">
            <div className="logo">
                Bandage
            </div>
            <div className="nav">
                <Link to="/" className="navLinks">
                    Home
                </Link>
                <Link to="/Productspage" className="navLinks productspage">
                    Shop
                    <span></span>
                </Link>
                <Link to="/" className="navLinks">
                    About
                </Link>
                <Link to="/" className="navLinks">
                    Blog
                </Link>
                <Link to="/" className="navLinks">
                    Contact
                </Link>
                <Link to="/" className="navLinks">
                    Pages
                </Link>
            </div>
            <div className="leftNav">
                    <Link to="/">
                        <FontAwesomeIcon icon={faUser} className="iconUser" />
                        Login/Register
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon icon={faSearch} className="header2icon iconSearch" />
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon icon={faShoppingCart} className="header2icon" />
                    </Link>
                   
                        <FontAwesomeIcon icon={faHeart} className="header2icon" />
                  
                </div>

        </div>
    );
}

export default Header2;
