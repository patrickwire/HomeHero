import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebaseConfig } from "./firebase.config";
import { Login } from "./screens/login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import firebase, { auth } from "firebase";
import { Home } from "./screens/home";
import { Logout } from "./screens/logout";
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
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link onClick={() => auth().signOut()} to="/logout">
                    Logout
                  </Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
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
