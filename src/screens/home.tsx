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
import { ActionCard } from "../components/ActionCard";
import { CommunityActionCard } from "../components/CommunityActionCard";
import { actionsData } from "../data/actions";
import { NewCard } from "../components/newCard";




export const Home = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [actions, setAction] = useState([]);
  const [importantActions, setimportantActions] = useState([]);
  const [communityActions, setCommunityActions] = useState([]);
  const [stars, setStars] = useState(0);
  const [active, setActive] = useState(0);
  const [help, setHelp] = useState(0);
  const [health, setHealth] = useState(0);
  const [amountUsers, setAmountUsers] = useState(0);

// @ts-ignore
 const renderActions=(actions:Action[], type: string):JSX.Element[]=>{
  return actions.map((action,idx)=>
  <div key={idx}>
    <ActionCard    type={action.type} title={action.title} counter={action.amount || 0} points={action.points}      
    onChange={value=>
              updateTask(idx, type)
            } />
    </div>)
 }

 //@ts-ignore
 const renderCommunityActions=(actions:Action[]):JSX.Element[]=>{
  return actions.map((action,idx)=>
  <div key={idx}>
        <CommunityActionCard action={action} 
        onChange={value=> {
          addTask(action, 0);
          delete communityActions[idx];
        }
          }/>
    </div>)
 }

  const userAuth = useContext(AuthContext);

  const updateTask = (taskid: any, type: string) => {
    // If important actions add it to the users Actions List
    if (type == 'important') {
      addTask(importantActions[taskid], 1);
      delete importantActions[taskid];
      return;
    }

    // Else Update the existing action
    let newActions = [...actions];
    //@ts-ignore
    newActions[taskid]['amount'] += 1;

    firestore()
    .collection("users")
    .doc(userAuth.uid)
    .update({
      actions: [...actions]
    });
    setAction(newActions);
  }

  const addTask = (action: any, amount: number) => {
    const newaction={
      type: action.type,
      title: action.title,
      amount: amount,
      points: action.points,
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
            const important = actionsData.filter(a => a.important==1);
            // @ts-ignore
            const notDoneImportant=data.actions?important.filter(e=>data.actions.filter(a=>e.title==a.title).length==0):[]
            // @ts-ignore
            setimportantActions(data.actions?notDoneImportant:important);
            // @ts-ignore
            setAction(data.actions||[]);

            //Community Actions
            // @ts-ignore
            const community = data.actions?actionsData.filter(e=>data.actions.filter(a=>e.title==a.title).length==0):[]
            // @ts-ignore
            setCommunityActions(community);
          }
        });
        firestore()
        .collection("data")
        .doc("stats")
        .get()
        .then(snapshot => {
          if (snapshot && snapshot.exists) {
            const data = snapshot.data()
            console.log(data);
           // @ts-ignore 
           setAmountUsers(data.amountUsers)
          
          }
        });
    }
  }, [userAuth]);

  
  useEffect(()=>{
    const active = actions['filter'](a => a['type']=='active');
    const a = active.reduce((a, b) => {return a + (b['amount']*b['points'])}, 0)
    const health = actions['filter'](a => a['type']=='health');
    const hea = health.reduce((a, b) => {return a + (b['amount']*b['points'])}, 0)
    const help = actions['filter'](a => a['type']=='help');
    const hel = help.reduce((a, b) => {return a + (b['amount']*b['points'])}, 0)
    setStars(a+hea+hel);
    setActive(a);
    setHealth(hea);
    setHelp(hel);
  },[actions])

  return (
    <div className="homescreen">
     
       <PointBars active={active} health={health} help={help} />
        <ProfileContainer username={username} avatar={avatar} points={stars}/>

        <SocialMediaContainer  uid={userAuth.uid}  points={stars}/>

        <NewCard onChange={value => {addTask(value, 0)}}/>


        <div className="TaskList">

          {renderActions(actions, 'user')}
          {renderActions(importantActions, 'important')}

        <div>
          <div className="UsersWorldwide">{amountUsers+596} BENUTZER WELTWEIT</div>
          <div className="CommunityIdeas">COMMUNITY IDEEN</div>
          {renderCommunityActions(communityActions)}
        </div>
        </div>
    </div>
  );
};

/**
 *           <Button
            onClick={() => {
              console.log('TODO: Adding new Task');
            }}
          >NEUER TASK</Button>
 */
