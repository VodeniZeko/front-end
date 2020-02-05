import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileItems from "./ProfileItems";
import { Fetch } from "../actions/Apicalls";

const ProfileItemGrid = () => {
  const items = useSelector(state => state.data);
  const currentuser = useSelector(state => state.currentuser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetch());
  }, [dispatch]);

  return (
    <div>
      {items
        .filter(stuff => stuff.user_id === currentuser.id)

        .map(item => (
          <ProfileItems item={item} />
        ))}
    </div>
  );
};

export default ProfileItemGrid;
