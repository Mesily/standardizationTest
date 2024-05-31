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
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    (225) 555-0118
                </div>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    michelle-river@example.com
                </div>
                <div className="promo">
                    Follow Us and get a chance to win 80% off
                </div>
                <div className="socialHandles">
                    Follow us:
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                    <FontAwesomeIcon icon={faYoutube} className="icon" />
                    <FontAwesomeIcon icon={faFacebook} className="icon" />
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                </div>
            </div>
            <div>
                <Header2 />
            </div>
        </>
    );
}

export default Header1;
