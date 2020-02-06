import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { NavbarContainer } from "../styles/styles.js";
import { useSelector, useDispatch } from "react-redux";
import { RESET_FORM } from "../reducers";

const Navbar = props => {
  const loggedin = useSelector(state => state.loggedin);
  const currentuser = useSelector(state => state.currentuser);
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
              <NavLink
                to={{
                  pathname: `/`
                }}>
                <span className='loggedSpan'>Home</span>
              </NavLink>

              {currentuser.department === "owner" ? (
                <NavLink
                  to={{
                    pathname: `/equipmentupload/${currentuser.id}`
                  }}>
                  <span
                    className='loggedSpan'
                    onClick={() => dispatch({ type: RESET_FORM })}>
                    Equipment Upload
                  </span>
                </NavLink>
              ) : null}
              <NavLink to='/itemlist'>
                <span className='loggedSpan'>Browse items!</span>
              </NavLink>
              <NavLink to='/profile'>
                <span className='loggedSpan'>Profile</span>
              </NavLink>
              <NavLink
                onClick={() =>
                  // localStorage.removeItem("token") &
                  // localStorage.removeItem("CURRENTUSER") &
                  localStorage.clear() &
                  sessionStorage.clear() &
                  dispatch({ type: "LOGGED_STATUS", payload: false })
                }
                to='/'>
                <span className='loggedSpan'>Log out</span>
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
