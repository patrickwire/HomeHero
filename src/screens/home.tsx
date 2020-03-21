import React, { useEffect, useState, useContext } from "react";
import { firestore } from "firebase";
import { AuthContext } from "../App";
import { UserData } from "../interfaces/userData";
import "./home.css";
import { Avatar } from "../components/Avatar";
import { Button } from "@material-ui/core";
import moment from "moment";
import banner_orange from "../assets/banner_orange.svg";
import banner_blue from "../assets/banner_blue.svg";
import banner_red from "../assets/banner_red.svg";
import icon_star_white from "../assets/icon_star_white.svg";
import icon_star_purple from "../assets/icon_star_purple.svg";
import { ProfileContainer } from "../components/ProfielContainer";
import { PointBars } from "../components/PointBars";
import { SocialMediaContainer } from "../components/socialmedia";


export const Home = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [actions, setAction] = useState([]);
  const [stars, setStars] = useState(0);
  const userAuth = useContext(AuthContext);
  const addTask = () => {
    const newaction={
      type: "test",
      title: "do good stuff",
      points: 500,
      date: moment().toISOString()
    }
    firestore()
      .collection("users")
      .doc(userAuth.uid)
      .update({
        actions: firestore.FieldValue.arrayUnion(newaction)
      });
      // @ts-ignore
      setAction([...actions,newaction])
  };
  useEffect(() => {
    if (userAuth.uid) {
      firestore()
        .collection("users")
        .doc(userAuth.uid)
        .get()
        .then(snapshot => {
          if (snapshot && snapshot.exists) {
            const data = snapshot.data() as UserData;
            setUsername(data.username.toUpperCase());
            setAvatar(data.avatar);
            // @ts-ignore
            setAction(data.actions||[]);
            // @ts-ignore
          
          }
        });
    }
  }, [userAuth]);
  
  useEffect(()=>{
    const s =actions.reduce((a, b) => {return a + (b['points'])}, 0)
    setStars(  s)
  },[actions])
  return (
    <div className="homescreen">
     
       <PointBars/>
        <ProfileContainer username={username} avatar={avatar} points={stars}/>

        <SocialMediaContainer points={stars}/>

        <div className="TaskList">
          <Button
            onClick={() => {
              addTask();
            }}
          >
            Example Task Done {stars}
          </Button>
        </div>
    </div>
  );
};
