import React, { useEffect, useState, useContext } from "react";
import { firestore } from "firebase";
import { AuthContext } from "../App";
import { UserData } from "../interfaces/userData";
import { Avatar } from "../components/Avatar";
import { Button } from "@material-ui/core";
import moment  from "moment";


export const Home = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [actions, setAction] = useState([]);
  const userAuth = useContext(AuthContext);
  const addTask = ()=>{
    firestore()
        .collection("users")
        .doc(userAuth.uid).update({actions:firestore.FieldValue.arrayUnion( {type:"test",title:"do good stuff",points:500,date:moment().toISOString()} )})
  }
  useEffect(() => {
    if (userAuth.uid) {
      firestore()
        .collection("users")
        .doc(userAuth.uid)
        .get()
        .then(snapshot => {
          if (snapshot && snapshot.exists) {
            const data = snapshot.data() as UserData;
            setUsername(data.username);
            setAvatar(data.avatar);
          }
        });
    }
  }, [userAuth]);
  return (
    <div>
      <h2>Home</h2>
      {username !== "" && "hello " + username}
      <br />
      <Avatar url={avatar} />
      <Button onClick={()=>{addTask()}}>Add tasks</Button>
    </div>
  );
};
