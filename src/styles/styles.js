import styled from "styled-components";
import image from "../assets/techItems.jpg";
import logo from "../assets/logo.svg";

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
    width: 400px;
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
    margin: 5px 0px;
    padding: 10px 15px;
    background-color: rgb(70, 153, 179);
    color: white;
    border: 1px solid rgb(70, 153, 179);
    background-color: 250ms;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(70, 153, 179);
  }

  .optionsContainer {
    margin: 15px 0px;
  }
`;
export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width:400px;
  .headerContainer {
    text-align: center;
    display: flex;
    margin:5em;
    flex-direction: column;
    justify-content: center;
    height: 45vh;
    @media (max-width: 800px) {
      height:45vh;
    }
  }
 
  .headerContainer > h1 {
    font-family: "Libre Baskerville", serif;
    font-size: 7rem;
    margin:.2em;
    @media (max-width: 800px) {
      font-size: 5rem;
    }
  }
  .headerContainer > h2 {
  font-family: 'Nixie One', cursive;
  font-size:3rem;
  @media (max-width: 800px) {
    font-size: 2rem;
    font-weight:bold;
  }
  }
  .btn {
    color: #1D9AF2;
    background-color: #292D3E;
    border: 1px solid #1D9AF2;
    border-radius: 4px;
    padding: 15px 18px 30px 15px
    cursor: pointer;
    height:40px;
    font-size:14px;
    box-shadow: 0 0 4px #999;
    background-position: center;
    transition: background 0.8s;
    width: 15%;
    align-self:center;
    margin:2em;
    @media (min-width: 1000px) {
      width: 10%;
    }
    @media (max-width: 800px) {
      width: 30%;
    }
    }
    .headerContainer > button:hover {
    background:#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    color: white;
    }
    .headerContainer > button:active{
    background-color:#292d3e;
    background-size: 100%;
    transition: background 0s;
    }

    .headerContainer > button:focus{
      outline:0;
    }
    .imageContainer {
      background-image:url(${image});
      height:40vh;
      background-size:cover;

    }
    .imageContainer > img {
      width:100%;
      padding:3em 0em;
    }

   
    .contentContainer {
      margin-bottom:2em;
    }
    #conference-timeline {
      position: relative;
      max-width: 920px;
      width: 100%;
      margin: 0 auto;
      padding-top:5em;
    }
    #conference-timeline .timeline-start,
    #conference-timeline .timeline-end {
      display: table;
      font-family: 'Nixie One', cursive;
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
    #conference-timeline .conference-center-line {
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
      box-shadow: 0 1px 3px rgba(0,0,0,.03);
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
      font-family: 'Nixie One', cursive;
      font-weight:bold;
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
    .timeline-article .content-right:before{
      position: absolute;
      top: 20px;
      font-size: 23px;
      font-family: 'Nixie One', cursive;
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

    /*===== // Vertical Timeline =====*/
    
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
    background-image:url(${logo});
    background-size:contain;
    background-color:white;
      top left no-repeat;
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
    background: url("https://www.proxibid.com/images/footer-logo-thefinest.png")
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
