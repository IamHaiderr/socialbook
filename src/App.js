import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Link,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
