import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
=======
import { firebaseConfig } from './firebase.config';
import { Login } from './screens/login';
import firebase, { auth } from "firebase";

firebase.initializeApp(firebaseConfig);
>>>>>>> 69af744c7b61e743028b15a8a3a33c8eb06f0b81

function App() {

  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <header className="App-header">
        <h1>{auth().currentUser?.uid}</h1>
       <Login></Login>
      </header>
    </div>
>>>>>>> 69af744c7b61e743028b15a8a3a33c8eb06f0b81
  );
}


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
