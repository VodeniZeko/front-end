import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
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
