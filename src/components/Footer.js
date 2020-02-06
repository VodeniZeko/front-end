import React from "react";
import { NavLink } from "react-router-dom";
import { FooterContainer } from "../styles/styles.js";
import { useSelector } from "react-redux";

export default function() {
  const loggedin = useSelector(state => state.loggedin);
  return (
    <FooterContainer>
      <footer>
        <div class="content">
          <div id="emailsignup">
            <button class="footer-logo">Shareable</button>
            <p>
              Stay in the know. Receive our weekly newsletter and stay on top of
              what's available on Shareable.
              <br style={{ margin: "0 0 12px 0" }} />
              <button>View this week's newsletter</button>
            </p>
            <p>
              <button class="btn" style={{ display: "inline-block" }}>
                Sign up for our newsletter
              </button>
            </p>
          </div>
          <div id="helpfullinks">
            <div>
              <p class="category">
                <button>About us</button>
              </p>
              <ul>
                <li>
                  <button>Help</button>
                </li>
                <li>
                  <button>Contact us</button>
                </li>
                <li>
                  <button>Leadership</button>
                </li>
                <li>
                  <button>Careers</button>
                </li>
                <li>
                  <button>Newsroom</button>
                </li>
                <li>
                  <a>Advertise with us</a>
                </li>
                <li>
                  <button>User agreement</button>
                </li>
                <li>
                  <button>Privacy policy</button>
                </li>
                <li>
                  <button>Shareable USA</button>
                </li>
              </ul>
            </div>
            <div>
              <p class="category">
                <button>Need Tech</button>
              </p>
              <ul>
                <li>
                  {!loggedin ? (
                    <NavLink to="/signup">
                      {" "}
                      <a>Creating account</a>
                    </NavLink>
                  ) : null}
                </li>
                <li>
                  <button>Searching</button>
                </li>
                <li>
                  <button>Using audio/video</button>
                </li>
                <li>
                  <button>Renting</button>
                </li>
                <li>
                  <button>Tracking</button>
                </li>
                <li>
                  <button>Giving feedback</button>
                </li>
                <li>
                  <button>Renting resources</button>
                </li>
              </ul>
            </div>
            <div class="last">
              <p class="category">
                <button>Have Tech</button>
              </p>

              {!loggedin ? (
                <button class="btn">
                  <NavLink to="/login">Renter login</NavLink>
                </button>
              ) : null}
              <ul>
                <li>
                  <button>Apply to rent</button>
                </li>
                <li>
                  <button>Rent Now</button>
                </li>
                <li>
                  <button>Auction</button>
                </li>
                <li>
                  <button>Storefronts</button>
                </li>
                <li>
                  <button>Security</button>
                </li>
                <li>
                  <button>Services</button>
                </li>
                <li>
                  <button>Renting resources</button>
                </li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          <div class="clear"></div>
          <div id="poweredby">
            <p>Powered by Lambda Students</p>
            <ul>
              <li>
                <button class="footer-divvy">Divvy</button>
              </li>
              <li>
                <button class="footer-finest">The Finest</button>
              </li>
              <li class="last">
                <button class="footer-apn">APN</button>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
          <div id="social">
            <ul class="social">
              <li>
                <button>Facebook</button>
              </li>
              <li>
                <button>Twitter</button>
              </li>
              <li>
                <button>YouTube</button>
              </li>
              <li class="last">
                <button>LinkedIn</button>
              </li>
            </ul>
            <div class="clear"></div>
            <ul class="contact">
              <li class="last">&copy;2020 Shareable, Inc.</li>
            </ul>
          </div>
          <iframe
            id="footerSealiFrame"
            title="myframe"
            src="https://www.proxibid.com/include/incFooterSeals.asp"
            allowtransparency="true"
            frameBorder="0"
            scrolling="no"
            seamless="seamless"
          ></iframe>
        </div>
      </footer>
    </FooterContainer>
  );
}
