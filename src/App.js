import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";
import Lost from "./components/Lost";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";

export default function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginModal />
        </Route>
        <Route path="/signup">
          <SignUpModal />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="">
          <Lost />
        </Route>
      </Switch>
    </main>
  );
}
