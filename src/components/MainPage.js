import React from "react";
import { MainPageContainer } from "../styles/styles.js";
import { Cta } from "../styles/styles.js";
import Testimonials from "./Testimonials";
import Typing from "../styles/Typing.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MainPage = () => {
  const loggedin = useSelector(state => state.loggedin);
  const currentuser = useSelector(state => state.currentuser);

  return (
    <MainPageContainer>
      <div className="headerContainer">
        <h1>
          Let your spare
          <Typing
            strings={[
              "Laptop",
              "Camera",
              "Smartphone",
              "Drone",
              "Headphones",
              "lenses",
              "Speakers"
            ]}
          />
          make money for you!
        </h1>
        <h2>
          Share your tech and make on average
          <br /> over <strong>300$</strong> a month on Shareable, <br />
          the world largest tech share marketplace.{" "}
        </h2>
        {!loggedin ? (
          <NavLink to="/signup">
            <button className="btn">Join Today !</button>
          </NavLink>
        ) : currentuser.department === "owner" ? (
          <NavLink
            to={{
              pathname: `/equipmentupload/${currentuser.id}`
            }}
          >
            <button className="btn">Start Listing!</button>
          </NavLink>
        ) : (
          <NavLink
            to={{
              pathname: "/itemlist"
            }}
          >
            <button className="btn">See Items!</button>
          </NavLink>
        )}
      </div>

      <div className="imageContainer"></div>
      <div className="contentContainer">
        <section className="conference-timeline">
          <div className="timeline-start">List your item</div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left">
                  <p>
                    Create an account with the largest smallest unknown tech
                    sharing webiste,no sign-up charges or monthly fee, all it
                    takes is 10 min of you time!{" "}
                    <span className="article-number">01</span>
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <span className="date">Join</span>
                <span className="month">us</span>
              </div>
            </div>
            <div className="timeline-article">
              <div className="content-left-container"></div>
              <div className="content-right-container">
                <div className="content-right">
                  <p>
                    Upload you tech items and set your price and rules, its easy
                    as that, we adjust prices to maximize your earnings!{" "}
                    <span className="article-number">02</span>
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <span className="date">Set</span>
                <span className="month">price</span>
              </div>
            </div>
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left">
                  <p>
                    Sit back and wait for earning to start, get paid by direct
                    deposit or paypal, with peace of mind knowing that we got
                    you covered and insured!
                    <span className="article-number">03</span>
                  </p>
                </div>
              </div>
              <div className="meta-date">
                <span className="date">Make</span>
                <span className="month">$$$</span>
              </div>
            </div>
          </div>
          <div className="timeline-end">Get paid </div>
        </section>
      </div>

      <Testimonials />
      <Cta>
        <div class="hero">
          <div class="wrapper">
            <h1>Start earning today </h1>
            <p>
              Join hundreds of thousands of hosts on Shareable and start earning
              tomorrow.
            </p>
            {!loggedin ? (
              <NavLink to="/signup">
                <button className="btn">Start Today!</button>
              </NavLink>
            ) : (
              <NavLink to="/itemlist">
                <button className="btn">See Listings!</button>
              </NavLink>
            )}
          </div>
        </div>
      </Cta>
    </MainPageContainer>
  );
};

export default MainPage;
