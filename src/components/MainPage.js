import React from "react";
import image from "../assets/techItems.jpg";
import { MainPageContainer } from "../styles/styles.js";

const MainPage = () => {
  return (
    <MainPageContainer>
      <div className="headerContainer">
        <h1>Let your ... work from you!</h1>
        <h2>
          Share your tech and make on average
          <br /> over <strong>300$</strong> a month on Shareable, <br />
          the world largest tech share marketplace.{" "}
        </h2>
        <button>Get Started</button>
      </div>
      <div className="imageContainer">
        <img src={`${image}`} />
      </div>
      <div className="contentContainer">look what we got</div>
    </MainPageContainer>
  );
};

export default MainPage;
