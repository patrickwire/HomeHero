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

export const Home = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [actions, setAction] = useState([]);
  const userAuth = useContext(AuthContext);
  const addTask = () => {
    firestore()
      .collection("users")
      .doc(userAuth.uid)
      .update({
        actions: firestore.FieldValue.arrayUnion({
          type: "test",
          title: "do good stuff",
          points: 500,
          date: moment().toISOString()
        })
      });
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
          }
        });
    }
  }, [userAuth]);
  return (
    <div>
      <div className="ProfileContainer">
        <div className="ProfilePic">
          <Avatar url={avatar} />
          <div className="User">
            <div className="Username">{username !== "" && username}</div>
            <div className="Userpoints">
              <b>9.999</b>
              <img
                style={{ height: "32px", paddingLeft: "7px" }}
                src={icon_star_purple}
              ></img>
            </div>
            <div className="Descriptor">STERNE</div>
          </div>
        </div>
      </div>
      <div className="SVGContainer">
        <div className="Social">
          <img src={banner_red}></img>
          <div className="PointContainer">
            <div className="Points">
              <b>9.999</b>
            </div>
            <div className="Nameline">AKTIV</div>
          </div>
          <div className="Star">
            <img style={{ height: "16px" }} src={icon_star_white}></img>
          </div>
        </div>
        <div className="Hygiene">
          <img src={banner_blue}></img>
          <div className="PointContainer">
            <div className="Points">
              <b>9.999</b>
            </div>
            <div className="Nameline">GESUNDHEIT</div>
          </div>
          <div className="Star">
            <img style={{ height: "16px" }} src={icon_star_white}></img>
          </div>
        </div>
        <div className="Behavior">
          <img src={banner_orange}></img>
          <div className="PointContainer">
            <div className="Points">
              <b>9.999</b>
            </div>
            <div className="Nameline">HELFEN</div>
          </div>
          <div className="Star">
            <img style={{ height: "16px" }} src={icon_star_white}></img>
          </div>
        </div>
        <Button
          onClick={() => {
            addTask();
          }}
        >
          Add tasks
        </Button>
      </div>
    </div>
  );
};
