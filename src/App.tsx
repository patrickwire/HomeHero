import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebaseConfig } from "./firebase.config";
import { Login } from "./screens/login";
import firebase, { auth } from "firebase";
interface UserAuth {
  uid?:string,
  loggedIn:boolean
}

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext({ uid: "", loggedIn: false } as UserAuth);
function App() {
  const [userAuth, setUserAuth] = useState({ uid: "", loggedIn: false });
  auth().onAuthStateChanged((a) => {
    if(userAuth.uid!==a?.uid){
      setUserAuth({uid:a?.uid||"",loggedIn:true})
    }
  });
  return (
    <div className="App">
      <AuthContext.Provider value={userAuth}>
        <header className="App-header">
          <h1>{userAuth.uid}</h1>
          {!userAuth.loggedIn&&<Login></Login>}
        </header>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
