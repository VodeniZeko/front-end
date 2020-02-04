import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { NavbarContainer } from "../styles/styles.js";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const loggedin = useSelector(state => state.loggedin);
  useEffect(() => {}, [loggedin]);
  const dispatch = useDispatch();
  return (
    <NavbarContainer>
      <NavLink to='/'>
        {" "}
        <div className='logo'>
          <img src={`${logo}`} alt='logo' />
          <p>Shareable</p>
        </div>
      </NavLink>
      <div className='nav-bar'>
        <nav>
          {!loggedin ? (
            <>
              <NavLink to='/login'>
                <span>Log in</span>
              </NavLink>
              <NavLink to='/signup'>
                <span>Sign up</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to='/equipmentupload'>
                <span>Equipment Upload</span>
              </NavLink>
              <NavLink to='/itemlist'>
                <span>See items!</span>
              </NavLink>
              <NavLink
                onClick={() =>
                  localStorage.removeItem("token") &
                  dispatch({ type: "LOGGED_STATUS", payload: false })
                }
                to='/'>
                <span>Log out</span>
              </NavLink>
            </>
          )}
          <NavLink to='/profile'>
            <span>Profile</span>
          </NavLink>
          <div id='indicator'></div>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
