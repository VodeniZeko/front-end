import styled from "styled-components";
import image from "../assets/techItems.jpg";
import logo from "../assets/logo.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 500px;
  background: black;
  .logo {
    color: white;
    text-align: center;
    display: flex;
    font-family: "Libre Baskerville";
    font-size: 1.5rem;
  }
  .logo p {
    margin-top: 20px;
    align-self: center;
  }

  .listedItems {
    display: flex;
    align-items: center;
    color: white;
  }
  img {
    width: 50px;
    height: 50px;
    background: white;
    margin: 1em;
    border-radius: 3em;
  }
  .nav-bar {
    position: relative;
    padding-top: 3em;
    display: flex;
    flex-direction: row-reverse;
    background: black;
  }
  nav {
    right: 0;
    left: 0;
    /* width: 400px; */
    align-self: center;
    transform: translateY(-50%);
  }

  nav span {
    position: relative;
    font-size: 1.2rem;
    color: #949494;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    padding: 15px 16px;
    transition: 0.2s ease color;
  }

  nav span:before,
  nav span:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
  }

  nav span:before {
    top: 0;
    left: 10px;
    width: 6px;
    height: 6px;
  }

  nav span:after {
    top: 5px;
    left: 18px;
    width: 4px;
    height: 4px;
  }

  nav span:nth-child(1):before {
    background-color: yellow;
  }

  nav span:nth-child(1):after {
    background-color: red;
  }

  nav span:nth-child(2):before {
    background-color: #00e2ff;
  }

  nav span:nth-child(2):after {
    background-color: #89ff00;
  }

  nav span:nth-child(3):before {
    background-color: purple;
  }

  nav span:nth-child(3):after {
    background-color: palevioletred;
  }

  nav span:hover {
    color: #fff;
  }

  nav span:hover:before,
  nav span:hover:after {
    transform: scale(1);
  }
`;
export const FormContainer = styled.div`
  h1 {
    text-align: center;
  }

  form {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  label,
  input {
    display: block;
    width: 100%;
  }

  label {
    margin: 5px;
    height: 22px;
  }

  input {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #777;
  }

  input.error {
    border-color: red;
  }

  .input-feedback {
    color: rgb(235, 54, 54);
    margin-top: 10px;
    font-size: 14px;
    margin-bottom: 20px;
  }

  button {
    color: #1D9AF2;
    background-color: #292D3E;
    border: 1px solid #1D9AF2;
    border-radius: 4px;
    padding: 15px 18px 30px 15px
    cursor: pointer;
    font-size:14px;
    box-shadow: 0 0 4px #999;
    background-position: center;
    transition: background 0.8s;
    align-self:center;
    margin:2em;
    width: 35%;
    height: 34px;
    }
    button:hover {
    background:#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    color: white;
    }
    button:active{
    background-color:#292d3e;
    background-size: 100%;
    transition: background 0s;
    }

    button:focus{
      outline:0;
    }
`;
export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 400px;

  .headerContainer {
    text-align: center;
    display: flex;
    margin: 5em;
    flex-direction: column;
    justify-content: center;
    height: 45vh;
    @media (max-width: 800px) {
      height: 45vh;
    }
  }

  .headerContainer > h1 {
    font-family: "Libre Baskerville", serif;
    font-size: 7rem;
    margin: 0.2em;
    @media (max-width: 800px) {
      font-size: 5rem;
    }
  }
  .headerContainer > h2 {
    font-family: "Nixie One", cursive;
    font-size: 3rem;
    @media (max-width: 800px) {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  button {
    color: #1d9af2;
    background-color: #292d3e;
    border: 1px solid #1d9af2;
    border-radius: 4px;
    padding: 8px 18px 30px 15px;
    cursor: pointer;
    height: 40px;
    font-size: 14px;
    box-shadow: 0 0 4px #999;
    background-position: center;
    transition: background 0.8s;
    width: 15%;
    align-self: center;
    margin: 2em;
    @media (min-width: 1000px) {
      width: 10%;
    }
    @media (max-width: 800px) {
      width: 30%;
    }
  }

  button:hover {
    background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
      center/15000%;
    color: white;
  }

  button:active {
    background-color: #292d3e;
    background-size: 100%;
    transition: background 0s;
  }
  button:focus {
    outline: 0;
  }
  .imageContainer {
    background-image: url(${image});
    height: 40vh;
    background-size: cover;
  }
  .contentContainer {
    margin-bottom: 2em;
  }
  .conference-timeline {
    position: relative;
    max-width: 920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 5em;
  }
  .conference-timeline .timeline-start,
  .conference-timeline .timeline-end {
    display: table;
    font-family: "Nixie One", cursive;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    background: #1d9af2;
    padding: 15px 23px;
    color: #fff;
    max-width: 5%;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .conference-timeline .conference-center-line {
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -2px;
    background: #00b0bd;
    z-index: -1;
  }
  #conference-timeline .conference-timeline-content {
    padding-top: 67px;
    padding-bottom: 67px;
  }
  .timeline-article {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    margin: 20px 0;
  }
  .timeline-article .content-left-container,
  .timeline-article .content-right-container {
    max-width: 44%;
    width: 100%;
  }
  .timeline-article .content-left,
  .timeline-article .content-right {
    position: relative;
    width: auto;
    border: 1px solid #ddd;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    padding: 27px 25px;
  }
  .timeline-article p {
    margin: 0 0 0 60px;
    padding: 0;
    font-weight: 400;
    color: #242424;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    font-family: "Nixie One", cursive;
    font-weight: bold;
  }
  .timeline-article p span.article-number {
    position: absolute;
    font-weight: 300;
    font-size: 44px;
    top: 10px;
    left: -60px;
    color: #00b0bd;
  }
  .timeline-article .content-left-container {
    float: left;
  }
  .timeline-article .content-right-container {
    float: right;
  }
  .timeline-article .content-left:before,
  .timeline-article .content-right:before {
    position: absolute;
    top: 20px;
    font-size: 23px;
    font-family: "Nixie One", cursive;
    color: #fff;
  }
  .timeline-article .content-left:before {
    content: "\f0da";
    right: -8px;
  }
  .timeline-article .content-right:before {
    content: "\f0d9";
    left: -8px;
  }
  .timeline-article .meta-date {
    position: absolute;
    top: 0;
    left: 50%;
    width: 72px;
    height: 72px;
    margin-left: -31px;
    color: #fff;
    border-radius: 100%;
    background: #1d9af2;
  }
  .timeline-article .meta-date .date,
  .timeline-article .meta-date .month {
    display: block;
    text-align: center;
    font-weight: 900;
    margin: 10px;
  }
  .timeline-article .meta-date .date {
    font-size: 18px;
  }
  .timeline-article .meta-date .month {
    font-size: 18px;
    line-height: 10px;
  }

  @media only screen and (max-width: 830px) {
    .contentContainer #conference-timeline .timeline-start,
    #conference-timeline .timeline-end {
      margin: 0;
    }
    .contentContainer #conference-timeline .conference-center-line {
      margin-left: 0;
      left: 50px;
    }
    .contentContainer .timeline-article .meta-date {
      margin-left: 0;
      left: 20px;
    }
    .contentContainer .timeline-article .content-left-container,
    .contentContainer .timeline-article .content-right-container {
      max-width: 100%;
      width: auto;
      float: none;
      margin-left: 110px;
      min-height: 53px;
    }
    .contentContainer .timeline-article .content-left-container {
      margin-bottom: 20px;
    }
    .contentContainer .timeline-article .content-left,
    .contentContainer .timeline-article .content-right {
      padding: 10px 25px;
      min-height: 65px;
    }
    .contentContainer .timeline-article .content-left:before {
      content: "\f0d9";
      right: auto;
      left: -8px;
    }
    .contentContainer .timeline-article .content-right:before {
      display: none;
    }
  }
  @media only screen and (max-width: 400px) {
    .contentContainer .timeline-article p {
      margin: 0;
    }
    .contentContainer .timeline-article p span.article-number {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  .coverPhoto {
    width: 100%;
    height: 30vh;
    background-color: #3b5998;
  }

  .coverPhoto h1 {
    color: #fff;
    display: inline;
    padding-bottom: 20px;
  }

  #cover {
    width: 100%;
    height: 350px;
  }

  #icon {
    height: 13em;
    width: 13em;
    position: relative;
    top: -120px;
    border: solid #fff 6px;
    left: 10%;
    border-radius: 100%;
  }

  #flexContainer {
    display: flex;
    margin: 0 10%;
  }

  .interest {
    border: solid #fff 2px;
    flex-grow: 2;
    background-color: #fff;
  }

  .status {
    border: solid #fff 3px;
    width: 60%;
    background-color: #f6f7f9;
  }

  .status img {
    width: 3em;
    height: 3em;
  }

  .status_box {
    border: solid #f6f7f9 2px;
    background-color: #fff;
    margin-bottom: 5px;
    padding: 5px 5px 50px;
  }
`;

export const FooterContainer = styled.div`
  footer {
    background: #222;
    overflow: hidden;
    border-top: solid 1px #000;
    padding: 58px 0 0;
    font-family: arial, helvetica, sans-serif;
    line-height: 1.5em;
  }
  footer p,
  footer ul,
  footer a,
  footer .btn {
    font-family: arial, helvetica, sans-serif;
    line-height: 1.5em;
    text-transform: none;
  }
  footer li {
    font-size: 0.875em;
    line-height: 1.5em;
  }
  footer .btn {
    background: #4497c4;
    background-image: -webkit-linear-gradient(top, #4497c4, #2d6a8e);
    background-image: -moz-linear-gradient(top, #4497c4, #2d6a8e);
    background-image: -ms-linear-gradient(top, #4497c4, #2d6a8e);
    background-image: -o-linear-gradient(top, #4497c4, #2d6a8e);
    background-image: linear-gradient(to bottom, #4497c4, #2d6a8e);
    -webkit-border-radius: 5;
    -moz-border-radius: 5;
    border-radius: 5px;
    -webkit-box-shadow: 0px 1px 2px #ffffff;
    -moz-box-shadow: 0px 1px 2px #ffffff;
    box-shadow: 0px 1px 2px #ffffff;
    color: #ffffff !important;
    font-size: 15px;
    padding: 5px 15px 6px 15px;
    border: solid #25658a 1px;
    text-decoration: none;
    -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset;
  }
  footer .content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }
  @media screen and (max-width: 768px) {
    footer .content {
      padding: 0 10px;
    }
  }
  footer .last {
    margin-right: 0px !important;
  }
  @media only screen and (max-width: 485px) {
    footer .last {
      clear: both;
    }
  }
  #emailsignup {
    float: left;
    width: 330px;
  }
  #emailsignup .footer-logo {
    display: block;
    width: 200px;
    height: 100px;
    background-image: url(${logo});
    background-size: contain;
    background-color: white;
    top: left no-repeat;
    text-indent: -9999px;
    margin-bottom: 30px;
  }
  #emailsignup a,
  #helpfullinks a,
  #social a,
  #poweredby a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
  }
  #emailsignup p {
    font-size: 13px;
    color: #fff;
    margin: 0px 0px 16px;
  }
  #helpfullinks {
    float: right;
  }
  @media only screen and (max-width: 825px) {
    #helpfullinks {
      float: none;
      clear: both;
    }
  }
  #helpfullinks div {
    float: left;
    margin-right: 45px;
  }
  #helpfullinks div a {
    display: inline;
    margin-top: -6px;
    margin-bottom: 8px;
  }
  #helpfullinks p.category {
    color: #fff;
    font-size: 21px;
    margin: 0 0 14px;
  }
  #helpfullinks p.category a {
    color: #fff;
  }
  #helpfullinks ul {
    list-style-type: none;
    padding: 0px;
    margin: 14px 0 0 0;
  }
  #helpfullinks li {
    padding: 0px;
    margin: 0 0 6px;
    font-size: 15px;
  }
  #poweredby {
    max-width: 100%;
    margin: 115px auto 0;
    overflow: hidden;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    #poweredby {
      margin: 26px auto 0;
    }
  }
  #poweredby p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 10px;
    text-align: center;
  }
  #poweredby ul {
    display: inline-block;
    margin: 0px auto;
    list-style-type: none;
    padding: 0px;
  }
  #poweredby li {
    margin: 0 40px 0 0;
    float: left;
  }
  @media only screen and (max-width: 495px) {
    #poweredby li {
      margin: 0 0 10px 0;
      float: none;
      clear: both;
    }
  }
  #poweredby .footer-divvy {
    display: block;
    width: 77px;
    height: 24px;
    background: url("https://www.proxibid.com/images/footer-logo-divvy.png") top
      left no-repeat;
    text-indent: -9999px;
  }
  #poweredby .footer-finest {
    display: block;
    width: 77px;
    height: 24px;
    
      top left no-repeat;
    text-indent: -9999px;
  }
  #poweredby .footer-apn {
    display: block;
    width: 77px;
    height: 24px;
    background: url("https://www.proxibid.com/images/footer-logo-apn.png") top
      left no-repeat;
    text-indent: -9999px;
  }
  #social {
    margin: 60px auto;
    overflow: hidden;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    #social {
      margin: 26px auto;
    }
  }
  #social ul {
    margin: 0px auto;
    list-style-type: none;
    padding: 0px;
  }
  #social ul.social,
  #social ul.contact {
    display: inline-block;
  }
  #social li {
    margin: 0 17px 0 0;
    float: left;
    color: rgba(255, 255, 255, 0.7);
  }
  @media only screen and (max-width: 495px) {
    #social li {
      margin: 0 0 10px 0;
      float: none;
      clear: both;
    }
  }
  #social li a {
    color: rgba(255, 255, 255, 0.7);
  }
  iframe {
    overflow: hidden;
  }
  #footerSealiFrame {
    border: medium none;
    height: 175px;
    margin: 0 auto;
    width: 100%;
    display: block;
    overflow: hidden;
  }
  @media only screen and (max-width: 600px) {
    #footerSealiFrame {
      height: 285px;
    }
    #footerSeals > img,
    #footerSeals > embed,
    #footerSeals > object,
    #footerSeals > a {
      display: inline-block !important;
      margin: 0 6px 10px !important;
      vertical-align: middle !important;
    }
  }
`;
export const SearchFormContainer = styled.label`
  display: flex;
  justify-content: center;
  margin: 2em;
  background-image: url(${search});
  background-size: 99% 82%;
  background-repeat: no-repeat;

  .fa-search {
    zoom: 5;
  }
  .dv {
    padding-top: 3em;
    height: 10em;
  }
  .Sc {
    display: flex;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;
  }
  .inpt {
    outline: 0;
    border: 0;
    font-size: 1.5em;
    background: white;
    width: 0;
    height: 2.8em;
    caret-color: transparent;
    font-family: "Nixie One", cursive;
    transition: width 0.5s linear;
    transition-timing-function: ease;
  }

  .search_icon {
    width: 3.5em;
    height: 3.5em;
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 0;
    border-radius: 2em;
  }

  .dv:hover .inpt {
    padding: 0 10px;
    width: 18.75em;
    transition: width 0.5s linear;
    background: white;
    caret-color: black;
    text-transform: capitalize;
    font-size: 1.5em;
    font-family: "Nixie One", cursive;
    font-weight: bold;
    cursor: pointer;
  }
  .Sc:hover .search_icon {
    color: black;
    cursor: pointer;
  }
`;
export const ItemContainer = styled.div`
  background-color: #faf7f2;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;

  .u-float-right {
    float: right;
  }

  .u-clearfix:before,
  .u-clearfix:after {
    content: " ";
    display: table;
  }

  .u-clearfix:after {
    clear: both;
  }

  .u-clearfix {
    *zoom: 1;
  }

  .u-flex-center {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .container {
    margin: 50px auto;
    width: 560px;
  }

  .card {
    background-color: #fff;
    flex-direction: row;
    border-radius: 2px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .card-media {
    float: left;
    padding: 0 0 25px 25px;
    position: relative;
    width: 250px;
  }

  .card-media-img {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    float: left;
    margin-top: -25px;
    position: relative;
  }

  .card-media-tag {
    border-radius: 2px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.22);
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.4px;
    padding: 5px 8px;
    position: absolute;
    left: 82px;
    text-transform: uppercase;
    top: 59px;
  }

  .card-media-tag-orange {
    background-color: #ff982c;
    color: #ffe111;
  }

  .card-media-tag-brown {
    background-color: #855345;
    color: #e8ca69;
  }

  .card-body {
    float: left;
    padding: 25px 25px 25px 20px;
    width: 415px;
  }

  .card-body-heading {
    color: #6f6f6f;
    display: inline-block;
    font-size: 26px;
  }

  .card-body-options {
    float: right;
  }

  .card-body-option {
    cursor: pointer;
    display: inline-block;
    position: relative;
    margin-left: 5px;
  }

  .card-body-stars {
    list-style-type: none;
    margin: 12px 0;
    padding: 0;
  }

  .card-body-stars > li {
    cursor: pointer;
    display: inline-block;
    float: left;
  }

  .card-button {
    color: #9c948a;
    display: inline-block;
    font-weight: 500;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 200ms ease-out;
  }

  .card-button svg {
    fill: #9c948a;
    transition: all 200ms ease-out;
  }

  .card-button-cta {
    background-color: #9c948a;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    color: #fff;
  }

  .card-button-cta:hover {
    box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.18);
    background-color: #f44336;
  }

  .card-button-link:hover {
    color: #444;
  }

  .card-button-link:hover svg {
    fill: #444;
  }

  .card-button-icon {
    display: inline-block;
    vertical-align: middle;
  }

  .floating-action-button {
    background-color: #ff4133;
    border-radius: 50%;
    bottom: 25px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
    cursor: pointer;
    height: 56px;
    position: absolute;
    right: 25px;
    transition: all 200ms ease-out;
    width: 56px;
  }

  .floating-action-button:hover {
    background-color: #ff2111;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.32);
  }
`;

export const SingleItemContainer = styled.div`
height:80vh;

#wrapper {
  background-color: #FFF;
  background-image:url(${cart});
  background-size: 170% 48%;
    background-position-y: bottom;
    background-repeat: no-repeat;
  width: 695px;
  height: 495px;
  margin: auto;
  margin-top: 10em;
  border-radius: 8px;
  box-shadow: 0px 0px 29px gray;
  -webkit-box-shadow: 0px 0px 29px gray;
  -moz-box-shadow: 0px 0px 29px gray;
}


.main-container {
  position:relative;
  margin:0 auto;
  height: 495px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* LEFT COLUMN */
.left-cl {
  margin: -187px 19px -5px 5px;
  flex: 1;
  z-index: 98;
}

/* RIGHT COLUMN */
.right-cl {
  margin: 0 20px 0 0px;
  flex: 1;
  z-index: 98;
}


h1 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 35px;
  color: #9B9B9B;
  letter-spacing: 1.98px;
  padding-bottom: 10px;
}

h3 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #9B9B9B;
  letter-spacing: 1.98px;
  margin-bottom: 15px;
}

h4 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 10px;
  color: #9B9B9B;
  letter-spacing: 3px;
  padding-bottom: 5px;
  margin-top: 50px;
}

p {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #9B9B9B;
  letter-spacing: 1px;
}

.availabilityNumber {
font-weight: bolder;
}

.basket {
  background-color: #FF7371;
  border: none;
  padding: 20px 50px;
  border-radius: 100px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: #FFF;
  letter-spacing: 1.98px;

  margin-top: 50px;

  /* ANIMATION */
  -o-transition:color .3s ease-out, background .3s ease-in;
  -ms-transition:color .3s ease-out, background .3s ease-in;
  -moz-transition:color .3s ease-out, background .3s ease-in;
  -webkit-transition:color .3s ease-out, background .3s ease-in;
  transition:color .3s ease-out, background .3s ease-in;

  /* ANIMATION */
  -o-transition:color .1s ease-out, transform .1s ease-in;
  -ms-transition:color .1s ease-out, transform .1s ease-in;
  -moz-transition:color .1s ease-out, transform .1s ease-in;
  -webkit-transition:color .1s ease-out, transform .1s ease-in;
  transition:color .1s ease-out, transform .1s ease-in;
}

.basket:before {
  background: url("https://res.cloudinary.com/dviuglhwb/image/upload/v1489676297/cart_t8m4la.svg") no-repeat scroll center center / 100% auto rgba(0, 0, 0, 0);
  content: "";
  display: inline-block;
  color: #fff;
  height: 25px;
  margin-right: 13px;
  position: relative;
  top: -2px;
  vertical-align: middle;
  width: 30px;
}


/* BACKGROUND DIAGONAL SHAPE */
.diagonal {
  position: absolute;
  width: 100px;
  height: 495px;
  margin-left: 149px;
  margin-top: -308px;
  background: lightgray;
  z-index: -1;
  /* Skew */
  -webkit-transform: skew(-30deg);
  -moz-transform: skew(-30deg);
  -o-transform: skew(-30deg);
  transform: skew(-30deg);
}

/* BUTTON BACK BACKGROUND */
.button-back {
  width: 0;
  height: 0;
  top: 0;
  border-top: 120px solid #FF7372;
  border-right: 70px solid transparent;

  -webkit-transform:rotate(360deg)

  /* ANIMATION */
  -o-transition:color .3s ease-out, border-top .3s ease-in;
  -ms-transition:color .3s ease-out, border-top .3s ease-in;
  -moz-transition:color .3s ease-out, border-top .3s ease-in;
  -webkit-transition:color .3s ease-out, border-top .3s ease-in;
  transition:color .3s ease-out, border-top .3s ease-in;
}

/* BUTTON BACK ICON */
.button-back span {
  position: absolute;
  margin-top: -100px;
  margin-left: 10px;

  /* ANIMATION */
  -o-transition:color .2s ease-out, transform .2s ease-in;
  -ms-transition:color .2s ease-out, transform .2s ease-in;
  -moz-transition:color .2s ease-out, transform .2s ease-in;
  -webkit-transition:color .2s ease-out, transform .2s ease-in;
  transition:color .2s ease-out, transform .2s ease-in;
}
.basket:hover {
  background-color: #FF935E;
  cursor: pointer;
  -ms-transform: scale(1.03);
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
}

.button-back:hover {
  border-top: 120px solid #FF935E;
  cursor: pointer;
}

.button-back span:hover {
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


`;
