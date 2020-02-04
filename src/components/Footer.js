import React from "react";
import { NavLink } from "react-router-dom";
import { FooterContainer } from "../styles/styles.js";

export default function() {
  return (
    <FooterContainer>
      <footer>
        <div class="content">
          <div id="emailsignup">
            <a href="#" class="footer-logo">
              Shareable
            </a>
            <p>
              Stay in the know. Receive our weekly newsletter and stay on top of
              what's available on Shareable.
              <br style={{ margin: "0 0 12px 0" }} />
              <a href="#">View this week's newsletter</a>
            </p>
            <p>
              <a href="#" class="btn" style={{ display: "inline-block" }}>
                Sign up for our newsletter
              </a>
            </p>
          </div>
          <div id="helpfullinks">
            <div>
              <p class="category">
                <a href="#">About us</a>
              </p>
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Leadership</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Advertise with us</a>
                </li>
                <li>
                  <a href="#">User agreement</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Shareable USA</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="category">
                <a href="#">Need Tech</a>
              </p>
              <ul>
                <li>
                  <NavLink to="/signup">
                    {" "}
                    <a href="#">Creating account</a>
                  </NavLink>
                </li>
                <li>
                  <a href="#">Searching</a>
                </li>
                <li>
                  <a href="#">Using audio/video</a>
                </li>
                <li>
                  <a href="#">Renting</a>
                </li>
                <li>
                  <a href="#">Tracking</a>
                </li>
                <li>
                  <a href="#">Giving feedback</a>
                </li>
                <li>
                  <a href="#">Renting resources</a>
                </li>
              </ul>
            </div>
            <div class="last">
              <p class="category">
                <a href="#">Have Tech</a>
              </p>
              <a href="#" class="btn">
                <NavLink to="/login">Renter login</NavLink>
              </a>
              <ul>
                <li>
                  <a href="#">Apply to rent</a>
                </li>
                <li>
                  <a href="#">Rent Now</a>
                </li>
                <li>
                  <a href="#">Auction</a>
                </li>
                <li>
                  <a href="#">Storefronts</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Renting resources</a>
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
                <a href="#" class="footer-divvy">
                  Divvy
                </a>
              </li>
              <li>
                <a href="#" class="footer-finest">
                  The Finest
                </a>
              </li>
              <li class="last">
                <a href="#" class="footer-apn">
                  APN
                </a>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
          <div id="social">
            <ul class="social">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li class="last">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
            <div class="clear"></div>
            <ul class="contact">
              <li class="last">&copy;2020 Shareable, Inc.</li>
            </ul>
          </div>
          <iframe
            id="footerSealiFrame"
            src="https://www.proxibid.com/include/incFooterSeals.asp"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            seamless="seamless"
          ></iframe>
        </div>
      </footer>
    </FooterContainer>
  );
}
