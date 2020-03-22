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
          console.log(["uid",res.user?.uid]);
          
          firestore()
            .collection("users")
            .doc(res.user?.uid)
            .set({ username,avatar });
            history.push("/");
        }).catch((error)=>{
          alert(error.code);
        });

    
    } catch (error) {
      alert(error.code);
    }
  };
  return (
    <div>
      <h1>Registrieren</h1>
      <ImageUpload onChange={(url)=>setAvatar(url)}/>
      <TextField
       
        label="username"
        error={username.length>0&&username.length<3}
        onChange={e => setUsername(e.target.value)}
        helperText={username.length<3&&"Username zu kurz"}
        value={username}
      /> <br /> <br />
       <TextField
       
        label="email"
      
        type="email"
        onChange={e => setEmail(e.target.value)}
     
        value={email}
      /> <br /> <br />
       <TextField
        error={password.length>0&&password.length<6}
        label="password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        value={password}
        helperText={password.length<6&&"Passwort zu kurz"}
      /> <br /> <br />
    
          <Checkbox
            checked={agb}
            onChange={(e)=>{setAgb(e.target.checked) }}
            name="checkedF"
           
          />Ich akzeptiere die <Link className="Link" style={{textDecoration:"underline"}} to="/terms">AGBs and Datenschutzbestimmungen</Link>
      
      <br/>
      <br/>
      <Button disabled={!agb||password.length<6||email.length<6||username.length<3}  variant="contained" color="primary"  onClick={onRegister}>Registrieren</Button>
      <br />
      <div className="RegisterLink">
        <Link className="Link" to="/login">Zurück zu Login</Link>
      </div>
      <br />  <br />  <br />  <br />  <br />  <br /> 
    </div>
  );
};
