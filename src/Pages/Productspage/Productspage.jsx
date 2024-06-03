import React from "react";
import Header1 from "../../components/Header1/Header1";
import Footer from "../../components/Footer/Footer";
import BestSellerProducts from "../../components/BestSellerProducts/BestSellerProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment, faAngleRight, faStar as solidStar, faShoppingCart, faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
// import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Productspage.css";
import topimg1 from "../../images/topimg1.png";
import topimg2 from "../../images/topimg2.jpg";
import topimg3 from "../../images/topimg3.png";
import img2 from "../../images/img2.png";
import brands1 from "../../images/brands1.png";
import brands2 from "../../images/brands2.png";
import brands3 from "../../images/brands3.png";
import brands4 from "../../images/brands4.png";
import brands5 from "../../images/brands5.png";
import brands6 from "../../images/brands6.png";


function Productspage() {
    return (
        <>
            <div className="productsPage">
                <div className="header">
                    <Header1 />
                </div>
                <div className="productNav">
                    <div className="productsnavs">
                    <span className="home">
                        <Link to="/" className="navLinks">Home</Link>
                        <FontAwesomeIcon icon={faAngleRight} className="productspageicon" />
                    </span>
                    <Link to="/" className="navLinks shop">
                        Shop
                    </Link>
                    </div>
                    
                </div>
                <div className="productsDescription">
                    <div className="productImage">
                        <img src={topimg1} className="img1" alt="image" />
                        <div className="smallPhotos">
                            <img src={topimg2} className="img2" alt="image" />
                            <img src={topimg3} className="img3" alt="image" />
                        </div>
                    </div>
                    <div className="description">
                        <h4>Floating Phone</h4>
                        <span className="stars">
                            <FontAwesomeIcon icon={solidStar} className="staricons" />
                            <FontAwesomeIcon icon={solidStar} className="staricons"/>
                            <FontAwesomeIcon icon={solidStar} className="staricons"/>
                            <FontAwesomeIcon icon={solidStar} className="staricons"/>
                            <FontAwesomeIcon icon={regularStar} className="staricons"/>
                            <span>10 Reviews</span>
                        </span>
                        <h3>$1,139.33</h3>
                        <h6>Availability  : <span>In Stock</span> </h6>
                        <div className="circles">
                            <div className="blue"></div>
                            <div className="green"></div>
                            <div className="red"></div>
                            <div className="black"></div>
                        </div>
                        <div className="lastpart">
                            <div className="btn">
                                <button>Select Options
                                    </button></div>
                            <div className="iconsets">
                                <span className="productsIcons">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faShoppingCart} className="productsicon" />
                                </Link>

                                <FontAwesomeIcon icon={faHeart} className="productsicon" />
                                <FontAwesomeIcon icon={faEye} className="productsicon" />
                            </span></div>
                        </div>
                    </div>
                </div>
                <div className="productsAdditionalInfo">
                    <div className="additionalnfoContainer">
                    <div className="additionalnfo">
                        <h4> Description</h4>
                        <h4> Additional Information</h4>
                        <h4> Reviews (10)</h4>
                    </div>
                    </div>
                    
                    <div>
                        <h1>the quick fox jumps over </h1>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>
                    <img src={img2} className="additionalPhoto" alt="photo" />
                </div>
                <div className="BestSeller">
                    Best seller Products
                    <div>
                        <BestSellerProducts />
                    </div>
                </div>
                <div className="productspageBrands">
                    <img src={brands1} className="brands" alt="photo" />
                    <img src={brands2} className="brands" alt="photo" />
                    <img src={brands3} className="brands" alt="photo" />
                    <img src={brands4} className="brands" alt="photo" />
                    <img src={brands5} className="brands" alt="photo" />
                    <img src={brands6} className="brands" alt="photo" />
                </div>
                <div>
                    <Footer />
                </div>
            </div>


        </>
    )
}

export default Productspage;