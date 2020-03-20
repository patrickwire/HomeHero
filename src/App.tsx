import React from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConfig } from './firebase.config';
import { Login } from './screens/login';
import firebase, { auth } from "firebase";

firebase.initializeApp(firebaseConfig);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>{auth().currentUser?.uid}</h1>
       <Login></Login>
      </header>
    </div>
  );
}

export default App;
