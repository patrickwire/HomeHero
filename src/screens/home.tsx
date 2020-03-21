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
  const [active, setActive] = useState(0);
  const [help, setHelp] = useState(0);
  const [health, setHealth] = useState(0);
// @ts-ignore
 const renderActions=(actions:Action[]):JSX.Element[]=>{
  return actions.map((action,idx)=>
  <div key={idx}>
     <Button
            onClick={() => {
              updateTask(idx);
            }}
          >
    {action.type}: {action.title}
    </Button>
    </div>)
 }

  const userAuth = useContext(AuthContext);

  const updateTask = (taskid: any) => {
    let newActions = [...actions];
    //@ts-ignore
    newActions[taskid]['amount'] += 1;
     //@ts-ignore
    newActions[taskid]['points'] += 500;

    firestore()
    .collection("users")
    .doc(userAuth.uid)
    .update({
      actions: [...actions]
    });
    setAction(newActions);
  }

  const addTask = () => {
    const newaction={
      type: "health",
      title: "Händewaschen",
      amount: 1,
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
    console.log(1)
    const s =actions.reduce((a, b) => {return a + (b['points'])}, 0)
    const active = actions['filter'](a => a['type']=='active');
    const a = active.reduce((a, b) => {return a + (b['points'])}, 0)
    const health = actions['filter'](a => a['type']=='health');
    const hea = health.reduce((a, b) => {return a + (b['points'])}, 0)
    const help = actions['filter'](a => a['type']=='help');
    const hel = help.reduce((a, b) => {return a + (b['points'])}, 0)
    setStars(s);
    setActive(a);
    setHealth(hea);
    setHelp(hel);
  },[actions])

  return (
    <div className="homescreen">
     
       <PointBars active={active} health={health} help={help} />
        <ProfileContainer username={username} avatar={avatar} points={stars}/>

        <SocialMediaContainer points={stars}/>

        <div className="TaskList">
          {renderActions(actions)}
          <Button
            onClick={() => {
              addTask();
            }}
          >NEUER TASK</Button>
        </div>

    </div>
  );
};
