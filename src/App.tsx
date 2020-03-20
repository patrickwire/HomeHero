import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { firebaseConfig } from './firebase.config';
import { Login } from './screens/login';
import  { PersistentDrawerRight } from './screens/drawer';
import firebase, { auth } from "firebase";

firebase.initializeApp(firebaseConfig);

function App() {

  return (

    <div className="App">
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
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <PersistentDrawerRight/>
        <header className="App-header">
            <h1>{auth().currentUser?.uid}</h1>
             <Login></Login>
        </header>
    </div>


  );
}


function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
