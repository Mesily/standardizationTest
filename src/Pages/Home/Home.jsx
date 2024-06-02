import React from "react";
import Header1 from "../../components/Header1/Header1";
import BestSellerProducts from "../../components/BestSellerProducts/BestSellerProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faComment, faAngleRight, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faYoutube, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import easywin from "../../images/easywin.png";
import concrete from "../../images/concrete.png";
import hackgrowth from "../../images/hackgrowth.png";
import featuredimg1 from "../../images/featuredimg1.png";
import featuredimg2 from "../../images/featuredimg2.png";
import featuredimg3 from "../../images/featuredimg3.png";
import profile from "../../images/profile.png";
import unsplash1 from "../../images/unsplash1.png";
import unsplash2 from "../../images/unsplash2.png";
import unsplash3 from "../../images/unsplash3.png";
import unsplash4 from "../../images/unsplash4.png";
import unsplash5 from "../../images/unsplash5.png";
import unsplash6 from "../../images/unsplash6.png";
import unsplash7 from "../../images/unsplash7.png";
import unsplash8 from "../../images/unsplash8.png";
import unsplash9 from "../../images/unsplash9.png";
import hmBg from "../../images/hmBg.png";
import Footer from "../../components/Footer/Footer";








function Home() {
  return (
    <>
      <div>
        <Header1 />

      </div>
      <div className="mainSection">
        <div className="container">
          <div className="leftContainer">
            <img src={card1} className="card1" alt="Card 1" />
          </div>
          <div className="rightContainer">
            <img src={card2} className="card2" alt="Card 2" />
            <img src={card3} className="card3" alt="Card 3" />
            <img src={card4} className="card4" alt="Card 4" />
          </div>
        </div>
        <div className="bestSellerContainer">
          <div className="headerText">
            <h4 className="headerTexth4"> Featured Products</h4>
            <h2 className="headerTexth1">BESTSELLER PRODUCTS</h2>
            <p className="headerTextp">Problems trying to resolve the conflict between </p>
          </div>
          <div className="apiImages">
            <BestSellerProducts />
          </div>
        </div>
        <div className="headerText">
          <h4 className="headerTexth4"> Featured Products</h4>
          <h2 className="headerTexth1">THE BEST SERVICES</h2>
          <p className="headerTextp">Problems trying to resolve the conflict between </p>
        </div>
        <div className="brands">
          <div className="easyWins">
            <img src={easywin} className="easywinImg" alt="Easy Win" />
            <h2>Easy Wins</h2>
            <p>Get your best looking smile now!</p>
          </div>
          <div className="concrete">
            <img src={concrete} className="concreteImg" alt="Concrete" />
            <h2>Concrete</h2>
            <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
          </div>
          <div className="hackGrowth">
            <img src={hackgrowth} className="hackgrowthImg" alt="Hack Growth" />
            <h2>Hack Growth</h2>
            <p>Overcame any hurdle or any other problem</p>
          </div>
        </div>
        <div className="featuredPosts">
          <div className="headerText">
            <p className="headerTextblue"> Practice Advice</p>
            <h2 className="headerTexth1">Featured Posts</h2>
          </div>
          <div className="featuredPostImg">
            <div className="featuredPostImg1">
              <img src={featuredimg1} className="featuredImg1" alt="featured Post1" />
              <div className="featuredPostTxt">
                <p className="p1">
                  <a href="" class="link">Google</a>
                  <span>Trending</span>
                  <span>New</span>
                </p>
                <h4>Loudest à la Madison #1<br></br>
                  (L'integral)</h4>
                <p className="p2">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="extraInfo">
                  <span>
                    <FontAwesomeIcon icon={faClock} className="icon" /> 22 April 2021
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faComment} className="icon" /> 10 comments
                  </span>
                  <p>Learn More <span className="learnmore"><FontAwesomeIcon icon={faAngleRight} className="icon" /></span></p>
                </div>
              </div>
            </div>
            <div className="featuredPostImg2">
              <img src={featuredimg2} className="featuredImg2" alt="featured Post2" />
              <div className="featuredPostTxt">
                <p className="p1">
                  <a href="" class="link">Google</a>
                  <span>Trending</span>
                  <span>New</span>
                </p>
                <h4>Loudest à la Madison #1<br></br>
                  (L'integral)</h4>
                <p className="p2">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="extraInfo">
                  <span>
                    <FontAwesomeIcon icon={faClock} className="icon" /> 22 April 2021
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faComment} className="icon" /> 10 comments
                  </span>
                  <p>Learn More <span className="learnmore"><FontAwesomeIcon icon={faAngleRight} className="icon" /></span></p>
                </div>
              </div>
            </div>
            <div className="featuredPostImg3">
              <img src={featuredimg3} className="featuredImg3" alt="featured Post3" />
              <div className="featuredPostTxt">
                <p className="p1">
                  <a href="" class="link">Google</a>
                  <span>Trending</span>
                  <span>New</span>
                </p>
                <h4>Loudest à la Madison #1 <br></br>
                  (L'integral)</h4>
                <p className="p2">
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className="extraInfo">
                  <span>
                    <FontAwesomeIcon icon={faClock} className="icon" /> 22 April 2021
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faComment} className="icon" /> 10 comments
                  </span>
                  <p>Learn More <span className="learnmore"><FontAwesomeIcon icon={faAngleRight} className="icon" /></span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="sayAboutUs">
            <div className="containerLeft">
              <h4>What they say about us</h4>
              <div className="profilecard">
                <img src={profile} className="profileImg" alt="profile photo" />
                <span>
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={regularStar} />
                </span>
                <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                <h5>Regina Milles</h5>
                <h5>Designer</h5>
              </div>
            </div>
            <div className="containerRight">
              <div className="row1unsplash">
                <img src={unsplash1} className="unsplash1Img" alt="photo" />
                <img src={unsplash2} className="unsplash2Img" alt="photo" />
                <img src={unsplash3} className="unsplash3Img" alt="photo" />
              </div>
              <div className="row2unsplash">
                <img src={unsplash4} className="unsplash4Img" alt="photo" />
                <img src={unsplash5} className="unsplash5Img" alt="photo" />
                <img src={unsplash6} className="unsplash6Img" alt="photo" />
              </div>
              <div className="row3unsplash">
                <img src={unsplash7} className="unsplash7Img" alt="photo" />
                <img src={unsplash8} className="unsplash8Img" alt="photo" />
                <img src={unsplash9} className="unsplash9Img" alt="photo" />
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <img src={hmBg} className="experienceBg" alt="experience background" />
          <div className="experienceTxt">
            <p className="bluetxt">Designing Better Experience</p>
            <h3>Problems trying to resolve the conflict between</h3>
            <p className="graytxt">Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
            <h4>$16.48</h4>
            <button className="ctaBtn">ADD YOUR CALL TO ACTION</button>
          </div>
        </div>

<div>
  <Footer />
</div>

      </div>

    </>

  );
}

export default Home;
