import React, { useEffect, useState, useContext } from "react";
import { firestore } from "firebase";
import { AuthContext } from "../App";
import { UserData } from "../interfaces/userData";

export const Home=()=> {
    const [username,setUsername]=useState("")
    const userAuth=useContext(AuthContext)
    useEffect( ()=>{
        if(userAuth.uid){
            firestore().collection("users").doc(userAuth.uid).get().then((snapshot)=>{
                if(snapshot&&snapshot.exists){
                    const data = snapshot.data() as UserData
                    setUsername(data.username)
                }
               
             })
        }
        
    },[userAuth])
return(<div><h2>Home</h2>{username!==""&&"hello "+username}</div>);
  }