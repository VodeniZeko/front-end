import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import { ProfileContainer } from "../styles/styles.js";
import profile from "../assets/profile.svg";

const Profile = () => {
  var check = "	\u2713";
  var noCheck = "	\u274C";
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setUser(res.data.results[0]);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(user);
  return (
    <ProfileContainer>
      <div class="coverPhoto">
        <img id="cover" src={`${profile}`} />

        <img id="icon" src={user.image} />
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
          Name: {user.name} <span style={{ paddingLeft: "20px" }}>{check}</span>
        </ListGroup.Item>
        <ListGroup.Item style={{ border: "none" }}>
          Email: {user.gender}{" "}
          <span style={{ paddingLeft: "20px" }}>{check}</span>
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
