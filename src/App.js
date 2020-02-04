import React from "react";
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
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  return (
    <main>
      <Navbar />
      <Switch>
<<<<<<< HEAD
        <PrivateRoute path='/equipmentupload' component={EquipmentUploadForm} />
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/login'>
=======
        <Route path="/EquipmentUpload">
          <EquipmentUploadForm />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/itemlist">
          <ItemList />
        </Route>
        <Route path="/login">
>>>>>>> bf559f27e4d0bc7e8d7ad8ddffc2a4d8b78d8ba4
          <LoginModal />
        </Route>
        <Route path='/signup'>
          <SignUpModal />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path=''>
          <Lost />
        </Route>
      </Switch>
    </main>
  );
}
