import React from "react";
import { AuthContext } from "../App";
import { useHistory, Link } from "react-router-dom";
import { auth, firestore } from "firebase";
import { TextField, Button } from "@material-ui/core";
import ImageUpload from "../components/UploadAvatar";




export const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
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
            .set({ username,avatar });
        });

      history.push("/");
    } catch (error) {
      alert("wrong login");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <ImageUpload onChange={(url)=>setAvatar(url)}/>
      <TextField
        id="outlined-basic"
        label="username"
        variant="outlined"
        onChange={e => setUsername(e.target.value)}
      
        value={username}
      /> <br /> <br />
       <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type="email"
        onChange={e => setEmail(e.target.value)}
     
        value={email}
      /> <br /> <br />
       <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        
      /> <br /> <br />
      <Button  variant="contained" color="secondary"  onClick={onRegister}>Register</Button>
      <br /><Link to="/login">Login</Link>
    </div>
  );
};
