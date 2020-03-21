import React from "react";
import { AuthContext } from "../App";
import { useHistory, Link } from "react-router-dom";
import { auth, firestore } from "firebase";
import { TextField, Button, FormControlLabel, Checkbox } from "@material-ui/core";
import ImageUpload from "../components/UploadAvatar";




export const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [agb, setAgb] = React.useState(false);
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
       
        label="username"
        onChange={e => setUsername(e.target.value)}
      
        value={username}
      /> <br /> <br />
       <TextField
       
        label="email"
      
        type="email"
        onChange={e => setEmail(e.target.value)}
     
        value={email}
      /> <br /> <br />
       <TextField
        label="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        
      /> <br /> <br />
    
          <Checkbox
            checked={agb}
            onChange={(e)=>{setAgb(e.target.checked) }}
            name="checkedF"
           
          />Ich akzeptiere die <Link className="Link" style={{textDecoration:"underline"}} to="/terms">AGBs and Datenschutzbestimmungen</Link>
      
      <br/>
      <br/>
      <Button disabled={!agb}  variant="contained" color="primary"  onClick={onRegister}>Register</Button>
      <br />
      <div className="RegisterLink">
        <Link className="Link" to="/login">Back to Login</Link>
      </div>

    </div>
  );
};
