import * as React from "react";
import { auth } from "firebase";
import { AuthContext } from "../App";
import { Redirect, useHistory, Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

interface Props {}

export const ResetPassword = (props: Props) => {
  const [email, setEmail] = React.useState("");
  const [send, setSend] = React.useState(false);

  const onResetPassword = () => {
    try {
      auth().setPersistence(auth.Auth.Persistence.LOCAL);
      const result = auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setSend(true);
        });
    } catch (error) {
      alert("wrong login");
    }
  };
  if (send) {
    return (
      <div>
        <h1>Reset Password</h1>check your mail
      </div>
    );
  }
  return (
    <div>
      <h1>Reset Password</h1>

      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="email"
        onChange={e => setEmail(e.target.value)}
      
        value={email}
     /> <br /> <br />
      <Button variant="contained" color="secondary" onClick={onResetPassword}>
        ResetPassword
      </Button>
    </div>
  );
};
