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
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { Onboarding } from "./screens/onboarding";
const theme = createMuiTheme({
  palette: {
    primary: deepPurple
  }
});

interface UserAuth {
  uid?: string;
  loggedIn: boolean;
}

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext({
  uid: "",
  loggedIn: false
} as UserAuth);

function App(props:any) {
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
      <ThemeProvider theme={theme}>
      <AuthContext.Provider value={userAuth}>
        <Router>
          {props.location?.pathname!=='/intro' && <PersistentDrawerRight/>}
          <div style={{display:"inline-block",width:"100%",maxWidth:"420px",position:"relative"}}>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <Switch>
            <Route path="/intro">
                <Onboarding />
              </Route>
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
      </ThemeProvider>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
