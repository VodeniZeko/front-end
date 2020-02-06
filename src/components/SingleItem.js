import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SingleItemContainer } from "../styles/styles.js";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../actions/Apicalls";

const SingleItem = ({ match }) => {
  const a = "	\u25BC";
  const smile = "	\u263A";
  const sad = "	\u2639";
  const id = match.params.id; //this fucker returns a string
  const products = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetch());
  }, [dispatch]);

  return (
    <SingleItemContainer>
      {products.map(el =>
        el.id == id ? ( // so we need double equal not tripple aaaaggrgrg
          <div id="wrapper">
            <div class="box">
              <div class="main-container">
                <div class="left-cl">
                  <NavLink to="/itemlist">
                    <div class="button-back">
                      <span className="button-back-span">
                        <svg
                          width="26px"
                          height="26px"
                          viewBox="63 67 26 26"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                            transform="translate(64.400240, 68.400000)"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path
                              d="M11.4176,0 C5.1104,0 0,5.1152 0,11.4216 C0,17.7304 5.1104,22.8392 11.4176,22.8392 C17.724,22.8392 22.8384,17.7304 22.8384,11.4216 C22.8384,5.1152 17.724,0 11.4176,0 L11.4176,0 Z"
                              id="Stroke-1"
                              stroke="#FFFFFF"
                            ></path>
                            <polyline
                              id="Stroke-3"
                              stroke="#FFFFFF"
                              points="10.46576 16.58848 5.67376 11.79648 10.46576 7.00448"
                            ></polyline>
                            <path
                              d="M17.26984,11.79656 L5.67384,11.79656"
                              id="Stroke-5"
                              stroke="#FFFFFF"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </NavLink>
                  <div class="diagonal"></div>
                  <img src={el.imgs} alt="" />
                </div>
                <div class="right-cl">
                  <h1>{el.item_name}</h1>
                  <h3>
                    {" "}
                    Daily rate:
                    <i style={{ color: "green", fontSize: "1.5em" }}>
                      {el.daily_rate}$
                    </i>
                  </h3>
                  <h4>Description {a}</h4>
                  <p>{el.description}</p>

                  <p className="availabilityNumber">
                    Availability:{" "}
                    <span style={{ fontSize: "1.5em" }}>
                      {el.availability > 0 ? (
                        <span style={{ color: "green" }}>Yes {smile}</span>
                      ) : (
                        <span style={{ color: "red" }}>{sad}</span>
                      )}
                    </span>
                  </p>

                  <button class="basket">Add to Basket</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          undefined
        )
      )}
    </SingleItemContainer>
  );
};
export default SingleItem;
