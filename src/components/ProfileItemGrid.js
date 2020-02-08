import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileItems from "./ProfileItems";
import { Fetch } from "../actions/Apicalls";
import Loader from "react-loader-spinner";

const ProfileItemGrid = () => {
  const items = useSelector(state => state.data);
  const currentuser = useSelector(state => state.currentuser);
  const loading = useSelector(state => state.isloading);

  const dispatch = useDispatch();
  const loadingcheck = !items && !loading;

  useEffect(() => {
    dispatch(Fetch());
  }, [loadingcheck, dispatch]);

  return (
    <div>
      {!items && !loading && <h2>Waiting on the items ... </h2>}

      {loading && (
        <Loader
          type='BallTriangle'
          color='#00BFFF'
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}

      <h1
        style={{
          textAlign: "center",
          textDecoration: "underline",
          color: "cornflowerblue",
          fontWeight: "800"
        }}>
        My Items
      </h1>

      {items && !loading && (
        <div style={{ height: "80vh" }}>
          {items
            .filter(stuff => stuff.user_id === currentuser.id)

            .map(item => (
              <ProfileItems item={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ProfileItemGrid;
