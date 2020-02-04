import React from "react";
import { ListGroup } from "react-bootstrap";
import { ProfileContainer } from "../styles/styles.js";
import profile from "../assets/profile.svg";

const Profile = () => {
  var check = "	\u2713";
  var noCheck = "	\u274C";
  return (
    <ProfileContainer>
      <div class="coverPhoto">
        <img id="cover" src={`${profile}`} />

        <img
          id="icon"
          src="https://sguru.org/wp-content/uploads/2017/06/cool-profile-pictures-63a5e8ee8cdcfab2f952bcd46a73e5c4.jpg"
        />
      </div>

      <ListGroup
        variant="flush"
        style={{
          padding: "2em 5em",
          fontSize: "2.5rem",
          height: "50vh",
          border: "none"
        }}
      >
        <ListGroup.Item
          style={{ border: "none", fontFamily: "'Nixie One', cursive" }}
        >
          Verified info
        </ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }}>
          Email: "email" <span style={{ paddingLeft: "20px" }}>{check}</span>
        </ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }}>
          Phone number: <span style={{ paddingLeft: "20px" }}>{noCheck}</span>
        </ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }}>
          Facebook: <span style={{ paddingLeft: "20px" }}>{noCheck}</span>
        </ListGroup.Item>
      </ListGroup>
    </ProfileContainer>
  );
};

export default Profile;
