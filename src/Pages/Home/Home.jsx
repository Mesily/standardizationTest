import React from "react";
import Header1 from "../../components/Header1/Header1";
import "./Home.css";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";




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
        <div className="bestSeller">
          <div>
          <h4> Featured Products</h4>
            <h1>BESTSELLER PRODUCTS</h1>
            <p>Problems trying to resolve the conflict between </p>
            <div className="apiImages">

            </div>
          </div>
        </div>
      </div>
      
    </>

  );
}

export default Home;
