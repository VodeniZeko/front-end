import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 500px;
  background: black;
  .logo {
    color: white;
    font-family: "Libre Baskerville";
    font-size: 1.5rem;
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
    width: 319px;
    display: table;
    transform: translateY(-50%);
  }

  nav a {
    position: relative;
    width: 33.333%;
    display: table-cell;
    font-size: 1.2rem;
    color: #949494;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    padding: 10px 6px;
    transition: 0.2s ease color;
  }

  nav a:before,
  nav a:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
  }

  nav a:before {
    top: 0;
    left: 10px;
    width: 6px;
    height: 6px;
  }

  nav a:after {
    top: 5px;
    left: 18px;
    width: 4px;
    height: 4px;
  }

  nav a:nth-child(1):before {
    background-color: yellow;
  }

  nav a:nth-child(1):after {
    background-color: red;
  }

  nav a:nth-child(2):before {
    background-color: #00e2ff;
  }

  nav a:nth-child(2):after {
    background-color: #89ff00;
  }

  nav a:nth-child(3):before {
    background-color: purple;
  }

  nav a:nth-child(3):after {
    background-color: palevioletred;
  }

  #indicator {
    position: absolute;
    left: 2%;
    bottom: -4%;
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
    transition: 0.2s ease left;
  }

  nav a:hover {
    color: #fff;
  }

  nav a:hover:before,
  nav a:hover:after {
    transform: scale(1);
  }

  nav a:nth-child(1):hover ~ #indicator {
    background: linear-gradient(130deg, yellow, red);
  }

  nav a:nth-child(2):hover ~ #indicator {
    left: 34%;
    background: linear-gradient(130deg, #00e2ff, #89ff00);
  }

  nav a:nth-child(3):hover ~ #indicator {
    left: 70%;
    background: linear-gradient(130deg, purple, palevioletred);
  }
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:5em;
  min-width:400px;
  .headerContainer {
    text-align: center;
    display: flex;
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
  .headerContainer > button {
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
    .imageContainer > img {
      width:100%;
      padding:3em 0em;
      border-radius:40em;
    }
`;

// export const SignUp = styled.div`
//   margin: 0;
//   padding: 0;
//   background: linear-gradient(indigo, navy);
//   height: 100vh;
//   font-family: Verdana, Geneva, sans-serif;
//   color: white;
//   text-align: center;

//   h1 {
//     font-weight: 100;
//     font-size: 3rem;
//     letter-spacing: 0.02em;
//     margin-bottom: 0;
//   }

//   .container {
//     margin: 0 auto;
//     width: 500px;
//   }

//   input {
//     width: 100%;
//     font-size: 1.5rem;
//     padding: 0.25em;
//     margin-top: 0.5em;
//     border: 3px solid black;
//   }

//   button {
//     background: orange;
//     font-size: 1.3rem;
//     margin: 1em;
//     padding: 0.2em 0.5em;
//   }

//   .error-input {
//     border: 2px solid red;
//     border-radius: 4px;
//   }

//   .error-text {
//     margin: 0.25em 0 0 0;
//     padding: 0;
//     color: red;
//     font-style: bold;
//     font-size: 1.2rem;
//   }
// `;
