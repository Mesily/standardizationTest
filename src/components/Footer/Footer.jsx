import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer(){
    return(
        <>
        <div className="topFooter">
            <div className="logo">Bandage</div>
            <div>
                < img src={faFacebook} className="facebook" alt="facebook Image" />
                <img src={faInstagram} className="instagram" alt="instagram image" />
                <img src={faTwitter} className="twitter" alt="twitter Image" />
            </div>
        </div>
        </>
    )
}
export default Footer;