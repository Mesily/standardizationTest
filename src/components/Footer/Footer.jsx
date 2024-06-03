import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
    return (
        <>

            <div className="topFooter">
                <div className="footer1">
                    <h4 className="footerLogo">Bandage</h4>
                    <div className="socialHandles">
                        <FontAwesomeIcon icon={faFacebook} className="footericon" />
                        <FontAwesomeIcon icon={faInstagram} className="footericon" />
                        <FontAwesomeIcon icon={faTwitter} className="footericon" />
                    </div>
                </div>
            </div>


                <div className="midFooter">
                    <div className="midFooter1">
                        <h4>
                            Company Info
                        </h4>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                    <div className="midFooter2">
                        <h4>
                            Legal
                        </h4>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                    <div className="midFooter3">
                        <h4>
                            Features
                        </h4>
                        <p>Business Marketing</p>
                        <p>User Analytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Support</p>
                    </div>
                    <div className="midFooter4">
                        <h4>
                            Resources
                        </h4>
                        <p>IOS and Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>
                    </div>
                    <div className="midFooter5">
                        <h4>
                            Get in Touch
                        </h4>
                        <div className="inputField">
                        <input type="email" placeholder="email" class="email-input" />
                        <button type="submit" class="email-button">Submit</button>
                        </div>
                        <p>Lore imp sum dolor Amit</p>
                    </div>
                </div>
                <div className="lastFooterContainer">
                <div className="lastFooter">Made With Love By Finland All Right Reserved </div>
                </div>
               
        </>
    )
}
export default Footer;