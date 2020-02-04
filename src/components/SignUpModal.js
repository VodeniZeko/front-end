import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import SignUp from "./SignUp";
import MainPage from "./MainPage";

const LoginModal = () => {
  const { push } = useHistory();
  const [show, setShow] = useState(true);

  return (
    <div>
      <MainPage />
      <Modal
        show={show}
        onHide={() => setShow(false) & push("/")}
        dialogClassName='modal-90w'>
        <Modal.Header closeButton>
          <Modal.Title id='SignUp'>Welcome to Shareable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUp />
          <Modal.Footer>
            <span>Already have an account?</span>
            <NavLink to='/login'>
              <Button variant='outline-secondary'>Login!</Button>
            </NavLink>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
