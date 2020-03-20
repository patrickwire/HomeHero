import React from "react";
import { AuthContext } from "../App";
import { useHistory, Link } from "react-router-dom";
import { auth, firestore } from "firebase";




export const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const userAuth = React.useContext(AuthContext);
  const history = useHistory();
  const onRegister = () => {
    try {
      auth().setPersistence(auth.Auth.Persistence.LOCAL);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          firestore()
            .collection("users")
            .doc(res.user?.uid)
            .set({ username });
        });

      history.push("/");
    } catch (error) {
      alert("wrong login");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <p>{userAuth.uid}</p>
      <input
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
        value={username}
      ></input>
      <input
        type="email"
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        value={email}
      ></input>
      <input
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        placeholder="password"
      ></input>
      <button onClick={onRegister}>Register</button>
      <Link to="/login">Login</Link>
    </div>
  );
};
