import React, { useEffect, useState, useContext } from "react";
import { firestore } from "firebase";
import { AuthContext } from "../App";
import { UserData } from "../interfaces/userData";
import "./home.css";
import { Avatar } from "../components/Avatar";


export const Home = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const userAuth = useContext(AuthContext);
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
      <div className="Behavior">
            <b className="Points">9.999</b><br />
            <b className="Nameline">BEHAVIOR</b>
        </div>
    </div>
  );
};
>>>>>>> 98b25aca81ce7bac36380e7bc5eee39f2b476558
