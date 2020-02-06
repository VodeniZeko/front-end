import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import Lost from "./components/Lost";
import MainPage from "./components/MainPage";
import EquipmentUploadForm from "./components/EquipmentUploadForm";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import PrivateRoute from "./utils/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";

import SingleItem from "./components/SingleItem";
import ProfileItemGrid from "./components/ProfileItemGrid";
import EditEquipmentForm from "./components/EditEquipmentForm";

export default function App(props) {
  const dispatch = useDispatch();
  const currentuser = useSelector(state => state.currentuser);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({ type: "LOGGED_STATUS", payload: true });
    }
  }, [dispatch]);

  return (
    <main>
      <Navbar />
      <Switch>
        <PrivateRoute
          path={`/equipmentupload/${currentuser.id}`}
          component={EquipmentUploadForm}
        />
        <PrivateRoute
          path='/equipmentupdate/:id'
          component={EditEquipmentForm}
        />

        <Route exact path='/'>
          <MainPage />
        </Route>
        <PrivateRoute path='/itemlist' component={ItemList} />
        <PrivateRoute path='/PersonalItems' component={ProfileItemGrid} />

        <Route path='/login'>
          <LoginModal />
        </Route>
        <Route path='/signup'>
          <SignUpModal />
        </Route>
        <PrivateRoute path='/profile' component={Profile} />
        <Route path='/:id' component={SingleItem} />
        <Route path=''>
          <Lost />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}
