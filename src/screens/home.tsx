import React, { useEffect, useState, useContext } from "react";
import { firestore } from "firebase";
import { AuthContext } from "../App";
import { UserData } from "../interfaces/userData";
import "./home.css";
import { Avatar } from "../components/Avatar";
import banner_orange from "../assets/banner_orange.svg"
import banner_blue from "../assets/banner_blue.svg"
import banner_red from "../assets/banner_red.svg"


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
        <div className="ProfileContainer">
            <Avatar url={avatar} />
            {username !== "" && "hello " + username}
        </div>
        <div className="SVGContainer">
            <div className="Behavior">
                 <img src={banner_orange}></img>
                 <b className="Points">9.999</b><br />
            </div>
            <div className="Hygiene">
                 <img src={banner_blue}></img>
            </div>
            <div className="Social">
                 <img src={banner_red}></img>
            </div>
        </div>

    </div>
    
  );
};