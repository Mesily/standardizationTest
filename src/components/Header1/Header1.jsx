import React from "react";
import "./Header1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Header2 from "../../components/Header2/Header2";

function Header1() {
    return (
        <>
            <div className="header1">
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} className="headericon" />
                    (225) 555-0118ico
                </div>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} className="n" />
                    michelle-river@example.com
                </div>
                <div className="promo">
                    Follow Us and get a chance to win 80% off
                </div>
                <div className="socialHandles">
                    Follow us:
                    <FontAwesomeIcon icon={faInstagram} className="headericon" />
                    <FontAwesomeIcon icon={faYoutube} className="headericon" />
                    <FontAwesomeIcon icon={faFacebook} className="headericon" />
                    <FontAwesomeIcon icon={faTwitter} className="headericon" />
                </div>
            </div>
            <div>
                <Header2 />
            </div>
        </>
    );
}

export default Header1;
