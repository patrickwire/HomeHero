import * as React from "react";
import { auth } from "firebase";
import { AuthContext } from "../App";
import { Redirect, useHistory, Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

interface Props {}

export const Login = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const userAuth = React.useContext(AuthContext);
  const history = useHistory();
  const onLogin = () => {
    try {
      auth().setPersistence(auth.Auth.Persistence.LOCAL);
      const result = auth().signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert("wrong login");
    }
  };
  return (
    <div>
      <h1>Login</h1>

      <TextField
        id="outlined-basic"
        label="email"
       
        type="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="password"
       
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={onLogin}>
        Login
      </Button>
      <br></br>
        <div className="RegisterLink">
          <Link className="Link" to="/register">Registrieren</Link><b>  |  </b>
          <Link className="Link" to="/resetPassword"> Passwort vergessen</Link>
        </div>
    </div>
  );
};
