import * as React from 'react';
import { auth } from 'firebase';
import { AuthContext } from '../App';


interface Props{}

export const Login=(props:Props)=> {
   
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const userAuth = React.useContext(AuthContext);
   
    const onLogin=()=>{
     try {
      auth().setPersistence(auth.Auth.Persistence.LOCAL)
      const result=auth().signInWithEmailAndPassword(email,password)
      
     } catch (error) {
       alert("wrong login")
     }
      
      
    }
    return (<div><h1>Login</h1>
    <p>{userAuth.uid}</p>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" value={email}></input>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password"></input>
    <button onClick={onLogin}>Login</button>
    </div>);
  }