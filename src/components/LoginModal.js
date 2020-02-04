import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Login from "./Login";
import MainPage from "./MainPage";

const LoginModal = () => {
  const [show, setShow] = useState(true);
  const { push } = useHistory();

  return (
    <div>
      <MainPage />
      <Modal
        show={show}
        onHide={() => setShow(false) & push("/")}
        dialogClassName='modal-90w'
        centered='true'>
        <Modal.Header closeButton>
          <Modal.Title id='SignUp'>Welcome back</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
          <Modal.Footer>
            <span>Don't have an account?</span>
            <NavLink to='/signup'>
              <Button variant='outline-secondary'>Sign up!</Button>
            </NavLink>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
