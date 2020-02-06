import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { ProfileContainer } from "../styles/styles.js";
import Stars from "./stars";
import profile from "../assets/profile.svg";
import { useSelector, useDispatch } from "react-redux";
import { Fetch } from "../actions/Apicalls.js";
// import ProfileItems from "./ProfileItems.js";
import { NavLink } from "react-router-dom";

const Profile = props => {
  const a = "	\u25BC";
  var check = "	\u2713";
  var noCheck = "	\u274C";
  // const [user, setUser] = useState([]); //only for rich and marty dummy data
  const items = useSelector(state => state.data);
  const currentuser = useSelector(state => state.currentuser);
  const loading = useSelector(state => state.isloading);
  const dispatch = useDispatch();

  // useEffect(() => { //only for rich and marty dummy data
  //   axios
  //     .get("https://rickandmortyapi.com/api/character/")
  //     .then(res => {
  //       setUser(res.data.results[0]);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);
  console.log(currentuser);
  useEffect(() => {
    dispatch(Fetch());
  }, [dispatch]);
  return (
    <ProfileContainer>
      {console.log(currentuser, "currentuser")}
      <div class='coverPhoto'>
        <img style={{ top: "255px" }} id='cover' src={`${profile}`} alt='' />
      </div>
      <div>
        <img
          style={{ top: "480px" }}
          id='icon'
          src='http://www.hailatara.md/images/no_avatar-xlarge.jpg'
          alt=''
        />
      </div>
      <div
        className='listContainer'
        style={{ display: "flex", margin: "0 auto" }}>
        <ListGroup
          variant='flush'
          style={{
            padding: "1em 5em 0em 0em",
            fontSize: "2.5rem",
            height: "50vh",
            border: "none"
          }}>
          <ListGroup.Item
            style={{ border: "none", fontFamily: "'Nixie One', cursive" }}>
            Verified info {a}
          </ListGroup.Item>
          {console.log(props, "props")}
          <ListGroup.Item style={{ border: "none" }}>
            Name: {currentuser.username}{" "}
            <span style={{ paddingLeft: "20px" }}>{check}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Email: <span style={{ paddingLeft: "20px" }}>{check}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Phone number: <span style={{ paddingLeft: "20px" }}>{noCheck}</span>
          </ListGroup.Item>
          <ListGroup.Item style={{ border: "none" }}>
            Facebook: <span style={{ paddingLeft: "20px" }}>{noCheck}</span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup
          variant='flush'
          style={{
            padding: "1em 0em",
            fontSize: "2.5rem",
            height: "50vh",
            border: "none"
          }}>
          {currentuser.department === "owner" ? (
            <ListGroup.Item
              style={{ border: "none", fontFamily: "'Nixie One', cursive" }}>
              Your Items{a}
            </ListGroup.Item>
          ) : null}

          <ListGroup.Item style={{ border: "none" }}>
            {items && !loading && (
              <>
                {items
                  .filter(stuff => stuff.user_id === currentuser.id)
                  .map(item => (
                    <ListGroup.Item
                      style={{
                        border: "none",
                        fontFamily: "'Nixie One', cursive"
                      }}>
                      <div
                        style={{
                          width: "50px",
                          height: "50px"
                        }}>
                        <NavLink to={`/PersonalItems`}>
                          <img src={item.imgs} alt='' />
                        </NavLink>
                      </div>
                    </ListGroup.Item>
                  ))}
              </>
            )}

            {console.log(items, "items")}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup
          variant='flush'
          style={{
            padding: "1em 5em",
            fontSize: "1.5rem",
            height: "50vh",
            border: "none"
          }}>
          {currentuser.department === "owner" ? (
            <ListGroup.Item
              style={{ border: "none", fontFamily: "'Nixie One', cursive" }}>
              Reviews from Renters{a}
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              style={{ border: "none", fontFamily: "'Nixie One', cursive" }}>
              Reviews from Owners{a}
            </ListGroup.Item>
          )}

          <ListGroup.Item style={{ border: "none" }}>
            <img
              src='https://thumbs.dreamstime.com/t/creative-vector-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mo-118823351.jpg'
              alt=''
            />
          </ListGroup.Item>

          {currentuser.department === "owner" ? (
            <ListGroup.Item style={{ border: "none" }}>
              <Stars />
              <p>No reviews yet</p>
              <span style={{ opacity: ".8" }}>
                {currentuser.username} hasn't rented anything out yet
              </span>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item style={{ border: "none" }}>
              <Stars />
              <p>No reviews yet</p>
              <span style={{ opacity: ".8" }}>
                {currentuser.username} hasn't rented anything yet
              </span>
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
