import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebaseConfig } from "./firebase.config";
import { Login } from "./screens/login";
import  { PersistentDrawerRight } from './screens/drawer';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import firebase, { auth } from "firebase";
import { Home } from "./screens/home";
import { Logout } from "./screens/logout";
import { Profile } from "./screens/profile";
import { Register } from "./screens/register";
import { ResetPassword } from "./screens/resetPassword";
interface UserAuth {
  uid?: string;
  loggedIn: boolean;
}

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext({
  uid: "",
  loggedIn: false
} as UserAuth);

function App() {
  const [userAuth, setUserAuth] = useState({ uid: "", loggedIn: false });
  auth().onAuthStateChanged(a => {
    if (a?.uid && userAuth.uid !== a?.uid) {
      setUserAuth({ uid: a?.uid || "", loggedIn: true });
    }
    if (a?.uid === undefined && userAuth.uid) {
      setUserAuth({ uid: "", loggedIn: false });
    }
  });
  return (
    <div className="App">
      <AuthContext.Provider value={userAuth}>
        <Router>
          <PersistentDrawerRight/>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/resetPassword">
                <ResetPassword />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
