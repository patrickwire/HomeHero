import  React, { useState, useEffect } from 'react';
import { PointBars } from '../components/PointBars';
import { ProfileContainer } from '../components/ProfielContainer';
import { SocialMediaContainer } from '../components/socialmedia';
import { ActionCard } from '../components/ActionCard';
import { useParams, useHistory } from 'react-router-dom';
import { firestore } from 'firebase';
import { UserData, Action } from '../interfaces/userData';
import { Button } from '@material-ui/core';
import { CommunityActionCard } from '../components/CommunityActionCard';
import { actionsData } from '../data/actions';

interface Props {}

export const Profile = (props: Props) => {
    const [username, setUsername] = useState("");
    const [avatar, setAvatar] = useState("");
    const [actions, setAction] = useState([]);
    const [stars, setStars] = useState(0);
    const [active, setActive] = useState(0);
    const [help, setHelp] = useState(0);
    const [health, setHealth] = useState(0);
    const [amountUsers, setAmountUsers] = useState(0);

    const {uid}=useParams();
    const history=useHistory()
    useEffect(() => {
        console.log(uid);
        
          firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then(snapshot => {
              if (snapshot && snapshot.exists) {
                const data = snapshot.data() as UserData;
                console.log(data);
                
                setUsername(data.username.toUpperCase());
                setAvatar(data.avatar);
                // @ts-ignore
                setAction(data.actions||[]);
                // @ts-ignore
              
              }else{
                setUsername("NUTZER EXISTIERT NICHT")
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
        
      }, []);
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
    // @ts-ignore
 const renderActions=(actions:Action[]):JSX.Element[]=>{
    return actions.map((action,idx)=>
    <div key={idx}>
      <ActionCard   
      type={action.type} 
      enabled={true}
      title={action.title} 
      counter={action.amount} 
      points={action.points}      
     />
      </div>)
   }
   const renderCommunityActions=():JSX.Element[]=>{
    return actionsData.map((action,idx)=>
    <div key={idx}>
          <CommunityActionCard action={action} 
         />
      </div>)
   }
  
return(
    <div>
        <PointBars active={active} health={health} help={help} />
        <ProfileContainer username={username} avatar={avatar} points={stars}/>

       

        <div className="TaskList">
        
          {renderActions(actions)}
          <br/>
        <br/>
          <Button variant="contained" color="primary"  onClick={()=>{history.push("/")}}>Jetz selber mitmachen</Button>
        <br/>
        <br/>
        <div style={{background:"#FFFFFF",paddingTop:50}}>
          <div className="UsersWorldwide">{amountUsers} BENUTZER WELTWEIT</div>
          <div className="CommunityIdeas">COMMUNITY IDEEN</div>
          {renderCommunityActions()}
        </div>
        </div>


        <br/>
        <br/>
        <br/>
       
       
    </div>
);

}