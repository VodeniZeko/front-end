import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { NavbarContainer } from "../styles/NavBarStyled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to='/'>
        {" "}
        <div className='logo'>
          <img src={`${logo}`} alt='' />
          Shareable
        </div>
      </NavLink>
      <div className='nav-bar'>
        <nav>
          <a href='#'>List items</a>
          <NavLink to='/login'>
            <a href='#'>Log in</a>
          </NavLink>
          <NavLink to='/signup'>
            <a href='#'>Sign in</a>
          </NavLink>
          <div id='indicator'></div>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
